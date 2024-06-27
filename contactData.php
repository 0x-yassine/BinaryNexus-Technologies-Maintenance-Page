<?php

$server = "localhost";
$user = "root";
$password = "";
$dbname = "binarynexus_technologies_mails";

$email = $_POST['emailInput'];
$subject = $_POST['subjectInput'];
$text = $_POST['textInput'];

$conn = mysqli_connect($server, $user, $password, $dbname);

if ($conn === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
} else {
    $sql = "INSERT INTO `mails` (email, subject, text) VALUES ('$email', '$subject', '$text')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
