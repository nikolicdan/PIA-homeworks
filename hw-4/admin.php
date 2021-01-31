<?php

include_once 'source/session.php';
include_once 'source/db_connect.php';

?>
<?php 
  if(isset($_POST['search'])) {
    $word=$_POST['input_search'];

    header("location: admin.php?src=$word");
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
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

    <?php if(!isset($_SESSION['username'])): header("location: logout.php");?>

    <?php else: ?>

    <?php endif ?>

    <?php
  $mysqli = new mysqli('localhost', 'root', '', 'mydb') or die(mysqli_error($mysqli));
  
  if(isset($_GET['all'])) {
    $res=$mysqli->query("SELECT * FROM films ") or die($mysqli->error) ;  
  }
  else if(isset($_GET['link'])) {
    $genres=$_GET['link'];
    $res=$mysqli->query("SELECT * FROM films WHERE genre IN ('$genres')") or die($mysqli->error) ;
  }
  else if(isset($_GET['src'])) {
    $word2=$_GET['src'];
    $res=$mysqli->query("SELECT * FROM films WHERE title LIKE ('%$word2%')") or die($mysqli->error);
  }
  else { 
    $res=$mysqli->query("SELECT * FROM films ") or die($mysqli->error) ; 
  }
  
?>

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

</nav>

<div id="films" class="offset">

  <div class="container-fluid">
  <div class="narrow">
    <table> 
    <tr><td class="genres"> 
    <div class="col-12" >	  
        <h2>Genres</h2>
        <a href=admin.php?link=Adventure>Adventure</a> <br/>
        <a href=admin.php?link=Action>Action</a> <br/> 	  
        <a href=admin.php?link=Comedy>Comedy</a> <br/> 
        <a href=admin.php?link=Drama>Drama</a> <br/>		
        <a href=admin.php?link=Romance>Romance</a> <br/>
        <a href=admin.php?link=Sci-Fi>Sci-Fi</a> <br/>
        <a href=admin.php?link=Thriller>Thriller</a> <br/><br/>    
        <form method="post">
            <button type="submit" class="btn btn-danger btn-lg" name="addFilms">Add Film</button> 
        </form> 
        <?php 
            if(isset($_POST['addFilms'])) {
                header('location: addFilms.php');
            }
        ?>   
         
    </div>
  
    </td>
    <td>
      <table class="border1"> 
      <?php if($res!=null) { while($row=$res->fetch_assoc()) : ?>
      
      <tr><td><a href="admin_about_film.php?film=<?php echo $row['title']?>"><img src="<?php echo $row['images']?>"></a></td></tr>
      <tr><td> &nbsp </td> </tr>
      <tr><td><a class="title" href="admin_about_film.php?film=<?php echo $row['title']?>"><?php  echo $row['title'] ?> </a></td> </tr>
      <tr><td> &nbsp </td> </tr> 
      <?php endwhile; } ?>
      </table>
    </td>
    </tr>
    
    </table>
   
  </div>
  </div>
</div>


</body>
</html>