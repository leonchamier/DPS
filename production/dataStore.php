<?php
$filedata=$_POST["file"];
$file = fopen("tempCrud.html","w");
echo $filedata;
fwrite($file,$filedata);
fclose($file);
?> 