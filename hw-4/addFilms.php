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

    
<?php 
        if(isset($_POST['title'])) {
            $title=$_POST['title'];
            $description= $_POST['description'];
            $genre=$_POST['genre'];
            $scenarist=$_POST['scenarist'];
            $director=$_POST['director'];
            $production=$_POST['production'];
            $stars=$_POST['stars'];
            $year=$_POST['year'];
            $images=$_POST['image'];            
            $time= $_POST['time'];
            $rating=$_POST['rating'];            
            
            $mysqli = new mysqli('localhost', 'root', '', 'mydb') or die(mysqli_error($mysqli));
            $sql="SELECT*FROM films  WHERE title='$title'";
            $result = $mysqli->query($sql) or die($mysqli->error) ;
    
            if(mysqli_num_rows($result) > 0) {  
                echo '<script type="text/javascript">alert("EXIST")</script>';
    }    
        else{
            $mysqli = new mysqli('localhost', 'root', '', 'mydb') or die(mysqli_error($mysqli));
            $s ="INSERT INTO films (title, description, genre, scenarist, director, production, stars, year, images, time, rating) VALUES ('$title','$description', '$genre', '$scenarist', '$director', '$production', '$stars', '$year', '$images', '$time', '$rating')";
            $res = $mysqli->query($s) or die($mysqli->error) ;
            if($res) {
                header("Location: admin.php");
                exit(); 
            }else {
                header("Location: admin.php?error=Error");
                exit(); 
            }
        }
    }
    ?>
    
    
    <div class="container">
        <form action="addFilms.php" method="post">
            <div class="row">
            <div class="col-75">
                <input type="text"class="addFilm"  name="title" placeholder="Add title"   autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <textarea id="description" name="description" placeholder="Add description"  style="height:200px"  autocomplete="off" required></textarea>                
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="genres" name="genre" placeholder="Add genre"   autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="scenarist" name="scenarist" placeholder="Add scenarist"   autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="directors" name="director" placeholder="Add director"  autocomplete="off"  required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="production" name="production" placeholder="Add production"   autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="stars" name="stars" placeholder="Add stars"  autocomplete="off" required>                
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="year" name="year" placeholder="Add year" autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="file" id="myFile" name="image" required>                
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="runtime" name="time" placeholder="Add time"   autocomplete="off" required>
            </div>
            </div>
            <div class="row">
            <div class="col-75">
                <input type="text" class="addFilm" id="rating" name="rating" placeholder="Add rating"  autocomplete="off" required>
            </div>
            </div>
            <div class="row" id="buttons">
                <input type="submit" id="buttonAddMovie" name='add' value="Add film">
            </div>
        </form>
    </div>
</div>
</body>
</html>