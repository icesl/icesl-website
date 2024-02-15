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

}

function loadScriptFnc(file, editor) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var data = event.target.result;
        editor.setValue(data, data.length);
    }
    
    reader.readAsText(file)
}

function saveScriptFnc(editor) {
    var blob = new Blob([editor.getValue()], {type: "text/plain"});
    saveAs(blob, "script.lua");
}
