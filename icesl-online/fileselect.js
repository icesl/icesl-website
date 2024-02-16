function initialize() {

	var fileSelect = document.getElementById("loadScript"),
    fileElem = document.getElementById("loadFile"); 
	fileSelect.addEventListener("click", function (e) {
	if (fileElem) {
	    fileElem.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);

	var fileSelect2 = document.getElementById("saveScript"),
    fileElem2 = document.getElementById("saveFile"); 
	fileSelect2.addEventListener("click", function (e) {
	if (fileElem2) {
	    fileElem2.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);	

    var fileSelect3 = document.getElementById("linkScript"),
    fileElem3 = document.getElementById("linkFile"); 
	fileSelect3.addEventListener("click", function (e) {
	if (fileElem3) {
	    fileElem3.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);
	
	var fileSelect4 = document.getElementById("loadMesh"),
    fileElem4 = document.getElementById("loadSTL"); 
	fileSelect4.addEventListener("click", function (e) {
	if (fileElem4) {
	    fileElem4.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);

}

function loadScriptFnc(file, editor) {

    var reader = new FileReader();
    reader.onload = function(event) {
        var data = event.target.result;
        editor.setValue(data, data.length);
        lastLoadedFilename = file.name;
    }
    
    reader.readAsText(file);
    
    jQuery.ajax({
      url: "reportLoad.php"
    }).done(function(data) {
    });

}

function saveScriptFnc(editor) {
    
    var filename = "script.lua";
    if (lastLoadedFilename != "") {
        filename = lastLoadedFilename 
    }
    var blob = new Blob([editor.getValue()], {type: "text/plain"});
    saveAs(blob, filename);
    
    jQuery.ajax({
      url: "reportSave.php"
    }).done(function(data) {
    });
    
}

function linkScriptFnc(editor) {

    var link = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    link = link + "?luacode=" + encodeURI(editor.getValue());
    window.open(link, "_blank");

}

function loadMeshFnc(file, editor) {

    var reader = new FileReader();

	reader.onload = function(event) {
		var data = event.target.result;
		createEmscriptenFile(file.name,data);
	};
		
	reader.readAsBinaryString(file);
	
	var session = editor.session;
    session.insert(
        {row:session.getLength(), column:0},
        "emit(load('" + file.name + "'))"
    );

}

function createEmscriptenFile(name, data) {
  try {
    FS.unlink("/" + name);
  } catch (error) {}
  FS.createDataFile("/", name, data, true, true, true);
}
