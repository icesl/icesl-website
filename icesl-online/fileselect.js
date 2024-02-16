function initialize() {

	var buttonElement1 = document.getElementById("loadScript");
    var buttonElem1 = document.getElementById("loadFile"); 
	buttonElement1.addEventListener("click", function (e) {
	if (buttonElem1) {
	    buttonElem1.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);

	var buttonElement2 = document.getElementById("saveScript");
    var buttonElem2 = document.getElementById("saveFile"); 
	buttonElement2.addEventListener("click", function (e) {
	if (buttonElem2) {
	    buttonElem2.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);	

	var buttonElement3 = document.getElementById("linkScript");
    var buttonElem3 = document.getElementById("linkFile");
	buttonElement3.addEventListener("click", function (e) {
	if (buttonElem3) {
	    buttonElem3.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);	

	
	var buttonElement4 = document.getElementById("loadMesh");
    var buttonElem4 = document.getElementById("loadSTL"); 
	buttonElement4.addEventListener("click", function (e) {
	if (buttonElem4) {
	    buttonElem4.click();
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
    navigator.clipboard.writeText(link);
    var buttonElement = document.getElementById("linkScript");
    var buttonName = buttonElement.innerHTML;
    buttonElement.innerHTML = "Copied to clipboard";
    async function sleep(ms) {
        await new Promise(r => setTimeout(r, ms));
        buttonElement.innerHTML = buttonName;
    }
    sleep(5000);
    //window.open(link, "_blank");

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
