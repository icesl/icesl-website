<?php

// getting url params
$num = $_GET["build"];
$vers = $_GET["version"];
$os = $_GET["os"];

// installers host
$dest = "../packages/";

// counter file
$counter = "counter.txt";

// counter init
// Windows versions
$x64_counter = 0;
$x86_counter = 0;
$win_beta_counter = 0;
$win_total_counter = 0;

// Linux versions
$amd64_counter = 0;
$i386_counter = 0;
$linux_beta_counter = 0;
$linux_total_counter = 0;


// retrieve previous values from counter file
$handle = fopen("counter.txt", "r");
if ($handle) {
	while (($line = fgets($handle)) !== false) {
		if (strpos($line, 'x64') !== false) {
			$x64_counter = intval(fgets($handle));
		} else if (strpos($line, 'x86') !== false) {
			$x86_counter = intval(fgets($handle));
		} else if (strpos($line, 'win_beta') !== false) {
			$win_beta_counter = intval(fgets($handle));
		} else if (strpos($line, 'win_total') !== false) {
			$win_total_counter = intval(fgets($handle));
		} else if (strpos($line, 'amd64') !== false) {
			$amd64_counter = intval(fgets($handle));
		} else if (strpos($line, 'i386') !== false) {
			$i386_counter = intval(fgets($handle));
		} else if (strpos($line, 'linux_beta') !== false) {
			$linux_beta_counter = intval(fgets($handle));
		} else if (strpos($line, 'linux_total') !== false) {
			$linux_total_counter = intval(fgets($handle));
		}
  }
  fclose($handle);
}

// reconstruct url for download based on params
if ($os == "x64" || $os == "x86") { //windows
	$dest .= "win/";
	if ($vers == "beta") {
		$win_beta_counter +=1;
    $dest .= "beta/IceSL_beta.exe";
	} elseif ($os == "x64") {
		$x64_counter +=1;
		$dest .= $os . "/IceSL_win64.exe";
	} elseif ($os == "x86") {
		$x86_counter +=1;
		$dest .= $os . "/IceSL_win32.exe";
	}
} elseif ($os == "i386" || $os == "amd64") { // linux
	$dest .= "linux/";
	if ($vers == "beta") {
		$linux_beta_counter +=1;
		$dest .= "beta/IceSL_beta.zip";
	} elseif ($os == "amd64") {
		$amd64_counter +=1;
		$dest .= $os . "/IceSL_amd64.zip";
	} elseif ($os == "i386") {
  	$i386_counter +=1;
		$dest .= $os . "/IceSL_i386.zip";
	}

}

// The following chunk of code is commented out until we can host installers on shapeforge (http)
// and request them from icesl (https). Some browsers take issue with this change of domain security
/*
// redirect to hosted file to start download
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . basename($dest));
header('Content-Transfer-Encoding: binary');
header('Expires: 5');
header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
header('Pragma: public');
header('Content-Length: ' . filesize($dest));
*/

// The following line works when the installers are hosted in the same website as the webpage (i.e., icesl.loria.fr)
header('Location: ' . $dest);

$win_total_counter = $win_beta_counter + $x64_counter + $x86_counter;
$linux_total_counter = $linux_beta_counter + $amd64_counter + $i386_counter;

// update & save counter file
$handle = fopen($counter,'w');
if($handle) {
	fwrite($handle, "## Win ##" . "\n");
	fwrite($handle, "--x64--" . "\n");
	fwrite($handle, strval($x64_counter) . "\n");
	fwrite($handle, "--x86--" . "\n");
	fwrite($handle, strval($x86_counter) . "\n");
	fwrite($handle, "--win_beta--" . "\n");
	fwrite($handle, strval($win_beta_counter) . "\n");
	fwrite($handle, "--win_total--" . "\n");
	fwrite($handle, strval($win_total_counter) . "\n");
	fwrite($handle, "\n");
	fwrite($handle, "## Linux ##" . "\n");
	fwrite($handle, "--amd64--" . "\n");
	fwrite($handle, strval($amd64_counter) . "\n");
	fwrite($handle, "--i386--" . "\n");
	fwrite($handle, strval($i386_counter) . "\n");
	fwrite($handle, "--linux_beta--" . "\n");
	fwrite($handle, strval($linux_beta_counter) . "\n");
	fwrite($handle, "--linux_total--" . "\n");
	fwrite($handle, strval($linux_total_counter) . "\n");
	fclose($handle);	
} else {
	print_r(error_get_last());
}

?>
