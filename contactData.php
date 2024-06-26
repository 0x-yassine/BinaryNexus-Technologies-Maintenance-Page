<?php
$servername = "localhost";
$user = "root";
$password = "";
$db_name = "binarynexus_technologies_mails";;

$conn = new mysqli($servername, $user, $password, $db_name);

if ($conn->error) {
    die('Connecttion Failed : ' . $conn->error);
} else {
    if (isset($_POST['emailInput']) && isset($_POST['subjectInput']) && isset($_POST['textInput'])) {
        $emailInput = $_POST['emailInput'];
        $subjectInput = $_POST['subjectInput'];
        $textInput = $_POST['textInput'];
        $sql = "INSERT INTO `mails` (email, subject, text) VALUES('$emailInput', '$subjectInput', '$textInput')";
        $conn->query($sql);
    } else {
        echo ('Please fill the fields correctly');
    }
}
