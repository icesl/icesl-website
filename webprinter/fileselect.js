function initialize() {

	var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"); 
	fileSelect.addEventListener("click", function (e) {
	  if (fileElem) {
	    fileElem.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);
}

function handleGCODEFile(file) {
 
	var reader = new FileReader();

	reader.onload = function(event) {
		var data = event.target.result;
		createEmscriptenFile("icesl.gcode",data);
    refreshEditor(data);    
	};
		
  reader.readAsBinaryString(file);
}

function createEmscriptenFile(name,data) {
  try {
    FS.unlink("/" + name);
  } catch (error) {}
  FS.createDataFile("/", name, data, true, true, true);
}
