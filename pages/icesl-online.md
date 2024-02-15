---
order: 4
layout: feature
title: WebForge
permalink: /icesl-online/
exclude: false
---

{% assign assets_dir = "" %}
    
<style>
     body {
        font-family: arial;
        margin: 0;
        padding: none;
        background-color: #ffffff;
    }

    /* the canvas *must not* have any border or padding, or mouse coords will be wrong */
    canvas.emscripten  { 
       position: relative;
       left: 0%;
       padding-right: 0;
       margin-left: auto;
       margin-right: auto;
       display: block;
    }

    #editor { 
	    position: relative;
	    left: 0%;
	    padding-right: 0;
	    margin-left: auto;
	    margin-right: auto;
	    display: block;
        height: 700px;
	    width: 800px;
    }

    .webforgetable {
        border: none;
	    background-color: transparent;
	    border-color: transparent;
        position: relative;
	    left: -11.7%;
    }

    #report_line {
        position: relative;
        font-family: consolas, serif;
        font-size: 20px;
        font-style: normal;
        color: white;
    }

    #report_msg {
        position: relative;
        font-family: consolas, serif;
        font-size: 20px;
        font-style: oblique;
        color: #f01818;
        white-space: nowrap;
    }
</style>

<script src="{{ "jquery-3.3.1.min.js" | prepend: assets_dir }}" charset="utf-8"></script>
<script src="{{ "bootstrap.js" | prepend: assets_dir }}" charset="utf-8"></script>
<script src="{{ "fileselect.js" | prepend: assets_dir }}" charset="utf-8"></script>
<script src="{{ "Blob.js" | prepend: assets_dir }}"> </script>
<script src="{{ "FileSaver.js" | prepend: assets_dir }}"> </script>

<script src="{{ "ace-min/ace.js" | prepend: assets_dir }}" type="text/javascript" charset="utf-8"></script>
<script async type="text/javascript" src="{{ "files.js" | prepend: assets_dir }}"></script>

<a class="button big button-third" id="loadScript">Load script</a>
<input type="file" id="loadFile" accept=".lua" style="display:none;" onchange="loadScriptFnc(this.files[0],editor)">
<a class="button big button-third" id="saveScript">Save script</a>
<input type="button" id="saveFile" style="display:none;" onclick="saveScriptFnc(editor)">
<a class="button big button-third" id="linkScript">Link script</a>
<input type="button" id="linkFile" style="display:none;" onclick="linkScriptFnc(editor)">

<script>
initialize();
</script>

<div class="align-center" id="loading-text">
  <i>Loading WebForge...</i><br>
  <progress id="loading-progress" value="0" max="100"></progress>
</div>

<!-- Layout -->

<table class="webforgetable">
  <tr>
    <td><div id="editor" tabindex="1"></div></td>
    <td><canvas class="emscripten" id="canvas" tabindex="2" oncontextmenu="event.preventDefault()"></canvas></td>
  </tr>
</table>

<h2 id="report_line"></h2> 
<h2 id="report_msg"></h2>
<p style="margin-bottom:100px;"></p>

<script>
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
        FS.writeFile('/script.lua', new Uint8Array(xhr.response), { encoding: "binary" });
        Module.endDownload();
      }
    };
    xhr.send();
  } else {
    tmExec = setTimeout(Module.reload,1000);
  }
  setTimeout(Module.centerView,2000);
}

  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/lua");
  editor.setFontSize(16);
  
  var lastLoadedFilename = "";

  function reportError(line,msg)
  {
    document.getElementById("report_line").innerHTML = '[' + line + ']';
    document.getElementById("report_msg").innerHTML = msg;
  }
  
  function save()
  {
    console.log('save')
    var text = editor.getSession().getValue();
    document.getElementById("report_line").innerHTML = '';
    document.getElementById("report_msg").innerHTML = '';
    FS.writeFile('/script.lua', text);
  }        

  function setupEditor()
  {
    var code = FS.readFile('script.lua', { encoding: 'utf8' });
    editor.setValue(code);
    
    // get lua code from url (if any) and set
    var url = window.location.search.substring(1);
    var url_vars = url.split('&');
    for (var v = 0; v < url_vars.length; v++) {
        var name_value = url_vars[v].split('=');
        if (name_value[0] == "luacode") {
            editor.setValue(decodeURI(name_value[1]));
            save();
        }
    }
    
    editor.clearSelection();
    editor.moveCursorTo(0,0);
    editor.getSession().on('change', function() 
    {
      if (typeof(tmExec) !== 'undefined') {
        clearTimeout(tmExec);
        console.log('restarting');
        Module.reload();
      }
      tmExec = setTimeout(save,1000);
    });
  }
  
  var Module = {
    preRun: [],
    postRun: [],
    print: function(text) {
      console.error(text);
    },
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

  var loadingText = document.getElementById("loading-text")
  var loadingProgress = document.getElementById("loading-progress") 
  var xhr = new XMLHttpRequest()
  xhr.open('GET', "{{ "IceSL-online.wasm" | prepend: assets_dir }}", true)
  xhr.responseType = 'arraybuffer'
  xhr.onprogress = function(event)
  {
    var progress = Math.round(event.loaded / event.total * 100)
    loadingProgress.value = progress
    //loadingText.innerHTML = "<i> Loading WebForge... [" + progress + "%]</i>"
  }
  xhr.onload = function()
  {
    Module.wasmBinary = xhr.response
    var script = document.createElement('script')
    script.src = "{{ "IceSL-online.js" | prepend: assets_dir }}"
    script.onload = function()
    {
    console.log("Emscripten boilerplate loaded.")
    }
    loadingText.parentNode.removeChild(loadingText)
    document.body.appendChild(script)
  }
  xhr.send(null)
</script>

<script>
  function saveFileFromMemoryFSToDisk(name) {
      console.log('saveFileFromMemoryFSToDisk');
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
  
  function selectEditorLine(line) {
    editor.gotoLine(line);
    editor.selection.selectLine();
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

