<?php
$file_name = $_POST['file_name'];

$myfile = fopen("./pub/" . $file_name, "w") or die("Unable to open file!");

$txt = $_POST['file_core'];;

fwrite($myfile, $txt);

fclose($myfile);
?>

<?php
include './transfert.php';
?>
