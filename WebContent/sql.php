<?php
function GetSQLLink() {
  $mysqli = new mysqli("localhost", "root", "", "fyp");
if ($mysqli-> connect_errno) {
	echo "Cannot connect to database server! Please check the connection.";
	exit();
}
return $mysqli;
}
?>
