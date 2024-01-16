---
order: 5
layout: feature
title: WebPrinter
permalink: /webprinter/
exclude: false
---
    
<script src="{{ "fileselect.js" | prepend: assets_dir }}" charset="utf-8"></script>

<style type="text/css">
  /* containers management*/
  #vrprinter{
    background-color: #272822;
    position: relative;
    left: 0%;
    width: 1410px;
    height: 710px;
    border: solid 5px;
    border-color: #939598;
  }

  #vrprinter > div, #vrprinter > canvas{
    float: left;
  }

  canvas.emscripten { 
    /* the canvas must have NO border NOR padding, or mouse coords will be wrong */
    width: 900px;
    height: 100%;;
  }

  #editor { 
    width: 500px;
    height: 100%;
  }

  #report_line {
    position: absolute;
    top:    120px;
    left:   1054px;
    color: white;
    font-family: consolas, serif;
    font-size: 20px;
    font-style: normal;
  }

  #report_msg {
    position: absolute;
    top:    120px;
    left:   1110px;
    color: white;
    font-family: consolas, serif;
    font-size: 20px;
    font-style: oblique;
    color: #ff8080;
    white-space: nowrap;
  }

  /* ace.js cursor states */
  .processing
  {
    background: rgba(128, 196, 0, 0.5);
    position: absolute;
    width: 100% !important;
    left: 0 !important;
  }

  .error
  {
    background: rgba(255, 0, 0, 0.5);
    position: absolute;
    width: 100% !important;
    left: 0 !important;
  }

  ul { /* not used?*/
    margin-top: 15px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  ul li { /* not used?*/
    margin-top: -15px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  #warning { /* not used?*/
    position: relative;
    top:    -20px;
    height: 0px;
    margin-top: -16px;
  }
</style>

<a class="button big button-big" id="fileSelect">Load GCODE</a>
<input type="file" id="fileElem" accept=".gcode" style="display:none;" onchange="handleGCODEFile(this.files[0])">

<div class="align-center" id="loading-text">
  <i>Loading WebPrinter...</i><br>
  <progress id="loading-progress" value="0" max="100"></progress>
</div>

<script src="ace-min/ace.js" type="text/javascript" charset="utf-8"></script>

<div id="vrprinter">
  <canvas class="emscripten" id="canvas" tabindex="1" oncontextmenu="event.preventDefault()"></canvas>
  <div id="editor" tabindex="2"></div>
  
  <h2 id="report_line"></h2>    
  <h2 id="report_msg"></h2>
</div> 

<script async type="text/javascript" src="files.js"></script>

<script type="text/javascript">
  /*
  *****************************
  ****      Text editor    ****
  *****************************
  */
  
  // setup
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/gcode");
  editor.setFontSize(16);
  
  var markerId = -1;


  
  // utilities
  function reportError(line,msg)
  {
    document.getElementById("report_line").innerHTML = '[' + line + ']';
    document.getElementById("report_msg").innerHTML = msg;
  }
  
  function highlightLine(line)
  {
    var editor = ace.edit("editor");
    var Range = ace.require('ace/range').Range
    if (markerId > -1) {
      editor.getSession().removeMarker(markerId);
    }
    markerId = editor.getSession().addMarker(new Range(line-1, 0, line-1, 100), "processing", "fullLine");
  }
  
  function errorLine(line)
  {
    var editor = ace.edit("editor");
    var Range = ace.require('ace/range').Range
    if (markerId > -1) {
      editor.getSession().removeMarker(markerId);
    }
    markerId = editor.getSession().addMarker(new Range(line-1, 0, line-1, 100), "error", "fullLine");
  }
  
  function save()
  {
    var text = editor.getSession().getValue();
    document.getElementById("report_line").innerHTML = '';
    document.getElementById("report_msg").innerHTML = '';
    text += '\n';
    FS.writeFile('/icesl.gcode', text);
  }        
  
  function setupEditor()
  {
    var code = FS.readFile('icesl.gcode', { encoding: 'utf8' });
    editor.setValue(code);
    editor.clearSelection();
    editor.moveCursorTo(0);
    editor.getSession().on('change', function() 
    {
      if (typeof(tmExec) !== 'undefined') {
        clearTimeout(tmExec);
        console.log('restarting');
      }
      tmExec = setTimeout(save,1000);
    });         
  }

  function refreshEditor(code)
  {
    editor.setValue(code);
    editor.clearSelection();
    editor.moveCursorTo(0);
  }

  initialize();
  
  /*
  *****************************
  ****        Emcc         ****
  **** traditional binding ****
  *****************************
  */
  var Module = {
    preRun: [],
    postRun: [],
    print: (function() {
      return function(text) {
        if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
        console.log(text);
      };
    })(),
    printErr: function(text) {
      if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(' ');
      console.error(text);
    },
    canvas: (function() {
      var canvas = document.getElementById('canvas');
      // As a default initial behavior, pop up an alert when webgl context is lost. To make your
      // application robust, you may want to override this behavior before shipping!
      // See http://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15.2
      canvas.addEventListener("webglcontextlost", function(e) { alert('WebGL context lost. You will need to reload the page.'); e.preventDefault(); }, false);
      return canvas;
    })(),
    setStatus: function(text) {
      if (!Module.setStatus.last) Module.setStatus.last = { time: Date.now(), text: '' };
      if (text === Module.setStatus.text) return;
      var m = text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/);
      var now = Date.now();
      if (m && now - Date.now() < 30) return; // if this is a progress update, skip it if too soon
      if (m) {
        text = m[1];
      } else {
      }
    },
    totalDependencies: 0,
    monitorRunDependencies: function(left) {
      this.totalDependencies = Math.max(this.totalDependencies, left);
      Module.setStatus(left ? 'Preparing... (' + (this.totalDependencies-left) + '/' + this.totalDependencies + ')' : 'All downloads complete.');
    }
  };
  Module.setStatus('Downloading...');
  window.onerror = function(event) {
    // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
    Module.setStatus('Exception thrown, see JavaScript console');
    Module.setStatus = function(text) {
      if (text) Module.printErr('[post-exception status] ' + text);
    };
  };
  
  /*
  *****************************
  ****        Emcc         ****
  ****    wasm binding     ****
  *****************************
  */
  window.onerror = function(event) {
    // TODO: do not warn on ok events like simulating an infinite loop or exitStatus
    Module.setStatus('Exception thrown, see JavaScript console');
    Module.setStatus = function(text) {
      if (text) Module.printErr('[post-exception status] ' + text);
    };
  };
  
  var loadingText = document.getElementById("loading-text")
  var loadingProgress = document.getElementById("loading-progress") 
  var xhr = new XMLHttpRequest()
  xhr.open('GET', "{{ "icesl-vrprinter.wasm" | prepend: assets_dir }}", true)
  xhr.responseType = 'arraybuffer'
  xhr.onprogress = function(event)
  {
    var progress = Math.round(event.loaded / event.total * 100)
    loadingProgress.value = progress
    //loadingText.innerHTML = "<i> Loading VRPrinter... [" + progress + "%]</i>"
  }
  xhr.onload = function()
  {
    Module.wasmBinary = xhr.response
    var script = document.createElement('script')
    script.src = "{{ "icesl-vrprinter.js" | prepend: assets_dir }}"
    script.onload = function()
    {
    console.log("Emscripten boilerplate loaded.")
    }
    loadingText.parentNode.removeChild(loadingText)
    document.body.appendChild(script)
  }
  xhr.send(null)
  
  /*
  *****************************
  ****     Command line    ****
  ****        Parsing      ****
  *****************************
  */
  function parseCommandLine()
  {
    /// get 'command line' parameters      
    // http://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var QueryString = function () {
      var query_string = {};
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
          // If first entry with this name
          if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
          var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
          query_string[pair[0]] = arr;
          // If third or later entry with this name
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      } 
      return query_string;
    }();
        
    /// Download file if given
    if (typeof QueryString.url !== 'undefined') {
      // download file
      var xhr = new XMLHttpRequest();
      xhr.open("GET", QueryString.url);
      xhr.responseType = "arraybuffer";
      xhr.overrideMimeType("application/octet-stream");
      Module.beginDownload();
      xhr.onprogress = function(evt) {
        if (evt.lengthComputable) {
          var percent = evt.loaded / evt.total;
          Module.setDownloadProgress(percent);
        }         
      };
      xhr.onload = function () {
        if (this.status === 200) {
          FS.writeFile('/print.gcode', new Uint8Array(xhr.response), { encoding: "binary" });
          Module.endDownload();
        }
      };
      xhr.send();
    }
  }
  
  /*
  *****************************
  ****     File saving     ****
  *****************************
  */
  function saveFileFromMemoryFSToDisk(name) {
     var data=FS.readFile(name);
     var blob;
     var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
     if(isSafari) {
        blob = new Blob([data.buffer], {type: "application/octet-stream"});
     } else {
        blob = new Blob([data.buffer], {type: "application/octet-binary"});
     }
     saveAs(blob, name);
  }
  
  Module['locateFile'] = function(path, prefix) {
    return "{{ assets_dir }}" + path;
  }
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-80490047-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-80490047-1');
</script>
