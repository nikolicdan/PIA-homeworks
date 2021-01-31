<?php
    include_once 'source/session.php';
    include_once 'source/db_connect.php';
    
    $title=$_GET['title'];
    $mysqli = new mysqli('localhost', 'root', '', 'mydb') or die(mysqli_error($mysqli));
    $sql="DELETE FROM films WHERE title='$title'";
    $result = $mysqli->query($sql) or die($mysqli->error) ;
    if($result){
        header("location: admin.php");
        die;
    }
    else{
        header("location: admin_about_film?error=Error");
    }
?>