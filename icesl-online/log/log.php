<?php

function log_message($message)
{
  $logfile = "log/log.txt";
 
  // Get time of request
  if( ($time = $_SERVER['REQUEST_TIME']) == '') {
    $time = time();
  }
 
  // Get IP address
  //if( ($remote_addr = $_SERVER['REMOTE_ADDR']) == '') {
  //  $remote_addr = "REMOTE_ADDR_UNKNOWN";
  //}
  $remote_addr = "na";
 
  // Format the date and time
  $date = date("Y-m-d H:i:s", $time);
 
  // Append to the log file
  $fd = @fopen($logfile, "a");
  if($fd) {
    $result = fputcsv($fd, array($date, $remote_addr, $message));
    fclose($fd);
  } else {
    echo "error";
  }
}

?>
