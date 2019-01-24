function initialize() {

	var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"); 
	fileSelect.addEventListener("click", function (e) {
	  if (fileElem) {
	    fileElem.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);

	var fileSelect2 = document.getElementById("fileSelect2"),
  fileElem2 = document.getElementById("fileElem2"); 
	fileSelect2.addEventListener("click", function (e) {
	  if (fileElem2) {
	    fileElem2.click();
	  }
	  e.preventDefault(); // prevent navigation to "#"
	}, false);

}

function handleSTLFile(file) {
 
	var reader = new FileReader();

	reader.onload = function(event) {
		var data = event.target.result;
		createEmscriptenFile("loaded.stl",data);
	};
		
	reader.readAsBinaryString(file);
}

function createEmscriptenFile(name,data) {
  try {
    FS.unlink("/" + name);
  } catch (error) {}
  FS.createDataFile("/", name, data, true, true, true);
}

function handleSettingsFile(file) {
 
	var reader = new FileReader();

	reader.onload = function(event) {
		var data = event.target.result;
		createEmscriptenFile("settings.xml",data);
	};
		
	reader.readAsBinaryString(file);
}
