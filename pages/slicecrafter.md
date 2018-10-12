---
order: 3
layout: feature
title: SliceCrafter
permalink: /slicecrafter/
exclude: false
---

<head>
    
    <script src="{{ "/assets/slicecrafter/jquery-3.3.1.min.js" | prepend: site.baseurl }}" charset="utf-8"></script>
		<script src="{{ "/assets/slicecrafter/bootstrap.js" | prepend: site.baseurl }}" charset="utf-8"></script>
 		<script src="{{ "/assets/slicecrafter/fileselect.js" | prepend: site.baseurl }}" charset="utf-8"></script>
		
    
    <style>
      body {
        font-family: arial;
        margin: 0;
        padding: none;
        background-color: #ffffff;
      }

      .emscripten { padding-right: 0; margin-left: auto; margin-right: auto; display: block; }
      div.emscripten { text-align: center; }
      div.emscripten_border { border: 1px solid black; }
      /* the canvas *must not* have any border or padding, or mouse coords will be wrong */
      canvas.emscripten { border: 0px none; }

ul {
    margin-top: 15px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}

ul li {
    margin-top: -15px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}

#warning {
    position: relative;
    top:    -20px;
    height: 0px;
    margin-top: -16px;
}

  </style>
</head>

<label for="name">Enter url of STL:</label>
<input style="width: 100%" type="text" name="url" id="url" value="http://">
<a style="float: right;" class="button small" id="createLink" onclick="createLink()">Create link</a><br>
<a style="float: right;" id="link"></a>

<div markdown="1" class="noBorderNoBackground">
<table style="table-layout: fixed;"><tr>
<td>
<a class="button fit" id="fileSelect">Load STL</a>
<input type="file" id="fileElem" accept=".stl" style="display:none" onchange="handleSTLFile(this.files[0])">
</td>
<td>
<a class="button fit" id="fileSelect2">Load settings</a>
<input type="file" id="fileElem2" accept=".xml" style="display:none" onchange="handleSettingsFile(this.files[0])">
</td>
</tr></table>
</div>

<br>
<body onload="initialize()">

  <script>
  function createLink()
  {
    var url = document.getElementsByName('url')[0].value;
    var mod = url;
    if (url.match('www.dropbox.com')) {
      mod = url.replace('www.dropbox.com','dl.dropboxusercontent.com');
      mod = mod.replace('?dl=0','?dl=1');
    }
    var lnk = 'http://shapeforge.loria.fr/slicecrafter/index.html?url=' + encodeURIComponent(mod);
    var a = document.getElementById('link');
    a.innerHTML=lnk;
    a.href=lnk;
  }
  </script>
  
  <canvas class="emscripten" id="canvas" tabindex="1" oncontextmenu="event.preventDefault()"></canvas>

  <script type='text/javascript'>

    var Module = {
      preRun: [],
      postRun: [],
      print: (function(text) {
        console.error(text);       
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
  </script>
 
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
          FS.writeFile('/loaded.stl', new Uint8Array(xhr.response), { encoding: "binary" });
          Module.endDownload();
        }
      };
      xhr.send();
    }
  }
  </script>


<script src="{{ "/assets/slicecrafter/Blob.js" | prepend: site.baseurl }}"> </script>
<script src="{{ "/assets/slicecrafter/FileSaver.js" | prepend: site.baseurl }}"> </script>

<script>
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
</script>
  
<script async type="text/javascript" src="{{ "/assets/slicecrafter/files.js" | prepend: site.baseurl }}"></script>
<script async type="text/javascript" src="{{ "/assets/slicecrafter/IceSL-slicer.js" | prepend: site.baseurl }}"></script>
