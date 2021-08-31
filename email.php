<?php
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje'];


$header = 'From: ' . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $mail . " \r\n"; 
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());
​
$para = 'consultasdrautomotores@gmail.com'; // El mail a donde van a llegar los mensajes
​$asunto = 'consulta automotor';

mail($para, $asunto, utf8_decode($mensaje), $header);
​header('Location:index.html');

echo "<script>alert('Correo enviado exitosamente')</script>";
echo "<script> setTimeout()</script>";

?>