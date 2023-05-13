<?php
if($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = 'chaitanyap220@gmail.com'; // Your email address here
    $message_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
    
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";
    
    mail($to, $subject, $message_body, $headers);
    
    // Redirect to index page or show success message
    header('Location: index.html');
}
?>
