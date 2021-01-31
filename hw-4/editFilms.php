<?php
    include_once 'source/session.php';
    include_once 'source/db_connect.php';
?>

<!DOCTYPE html>
<html>

<head>
<title>MyImdb</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Imdb</title>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="bootstrap-4.1.3-dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="bootstrap-4.1.3-dist/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="css/style_films.css">
    <script src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
</head>
<body>
<nav class="navbar navbar-expand-md  bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="admin.php?all"><h2 >My Imdb</h2></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            
            <li>
                <form class="example" action="admin.php" method="post">
                    <input type="text" placeholder="Search" name="input_search">
                    <button type="submit" name="search"><i class="fa fa-search" ></i></button>
                </form>
            </li>
            <li>
              <a href="logout.php" class="btn btn-danger btn-lg"> LogOut </a>
            </li>
        </ul>
    </div>

</nav><br><br><br>
    <div id="conMovie">
    
    
    <div class="container">
        <form action="" method="post">
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="title" name="update_title" placeholder="Edit title"   autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="title"><a>Update title</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="year" name="update_year" placeholder="Edit year" autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="year">Update year</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <textarea id="description" name="update_description" placeholder="Edit description"  style="height:200px"  autocomplete="off"></textarea>
                <button class="btn btn-dark" id="update" type="submit" class="btn btn-dark" name="description">Update description</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="genres" name="update_genre" placeholder="Edit genre"   autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="genres">Update genres</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="directors" name="update_director" placeholder="Edit director"  autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="directors">Update direcotrs</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="production" name="update_production" placeholder="Edit production"   autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="production">Update production</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="runtime" name="update_time" placeholder="Edit time"   autocomplete="off" >
                <button class="btn btn-dark" id="update" type="submit" name="runtime">Update time</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="scenarist" name="update_scenarist" placeholder="Edit scenarist"   autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="scenarist">Update scenarist</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="stars" name="update_stars" placeholder="Edit stars"  autocomplete="off">
                <button class="btn btn-dark" id="update" type="submit" name="stars">Update stars</button><br><br><br>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="file" id="myFile" name="update_image" >
                <button class="btn btn-dark" id="update" type="submit" name="image">Update image</button><br><br><br>
            </div>
            </div>
        </form>
    </div>
</div>
</body>
</html>
   
<?php 
       
        $mysqli = new mysqli('localhost', 'root', '', 'mydb') or die(mysqli_error($mysqli));
        $film_title = $_GET['title'];
        $sql = "SELECT * FROM films WHERE title='$film_title'";
        $result = $mysqli->query($sql) or die($mysqli->error) ;
        $row = mysqli_fetch_assoc($result);
        $title = $row['title'];

        if(isset($_POST['title'])){
            $title = $_POST['update_title'];
            $sql = "UPDATE films SET title = '$title' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        

        if(isset($_POST['year'])){
            $year = $_POST['update_year'];
            $sql = "UPDATE films SET year = '$year' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['description'])){
            $description = $_POST['update_description'];
            $sql = "UPDATE films SET description = '$description' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['image'])){
            $image = $_POST['update_image'];
            $sql = "UPDATE films SET images = '$image' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['production'])){
            $production = $_POST['update_production'];
            $sql = "UPDATE films SET production = '$production' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['runtime'])){
            $runtime = $_POST['update_time'];
            $sql = "UPDATE films SET time = '$runtime' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['directors'])){
            $directors = $_POST['update_director'];
            $sql = "UPDATE films SET director = '$directors' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['scenarist'])){
            $scenarist = $_POST['update_scenarist'];
            $sql = "UPDATE films SET scenarist = '$scenarist' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['stars'])){
            $stars = $_POST['update_stars'];
            $sql = "UPDATE films SET stars = '$stars' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
        if(isset($_POST['genres'])){
            $genres = $_POST['update_genre'];
            $sql = "UPDATE films SET genre = '$genres' WHERE title = '$film_title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
        
            if($result){
                echo "<script> location.replace('admin.php'); </script>";
                exit();
            }else{
                echo "<script> location.replace('admin.php?ereor=ERROR'); </script>";
                exit(); 
            }
        }
        
    ?>