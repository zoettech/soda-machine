<?php
	if(isset($_POST['submit'])){
		$fname=$_POST['f_name'];
		$lname=$_POST['l_name'];
		$subject=$_POST['subject'];
		$email=$_POST['email'];
		$msg=$_POST['message'];
		$fullName=$fname+lname;
		$to='info@qualitysodamachine.com'; // Receiver Email ID, Replace with your email ID
		$subject='Contact Form';
		$message="Name :".$fullName."\n"."Subject :".$subject."\n"."Message :"."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent Successfully! Thank you"." ".$name.", We will contact you shortly!</h1>";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>