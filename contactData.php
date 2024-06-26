<?php
$email = $_POST['emailInput'];
$subject = $_POST['subjectInput'];
$text = $_POST['textInput'];

//Database Connection
$conn = new mysqli('localhost', 'root', '', 'binarynexus_technologies_mails');
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into mails(email, subject, text) values(?,?,?)");
    $stmt->bind_param("sss", $email, $subject, $text);
    $stmt->execute();
    echo "Thanks for contacting us!";
    $stmt->close();
    $conn->close();
}
