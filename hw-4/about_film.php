<?php 
  if(isset($_POST['search'])) {
    $word=$_POST['input_search'];

    header("location: dashboard.php?src=$word");
  }
?>
<?php
  if(isset($_GET['logout'])) {
    session_unset();
    session_destroy();
    
    header('location: index.html');
  }
?>
<?php session_start(); ?>
<!DOCTYPE html>
<html >

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Imdb</title>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="bootstrap-4.1.3-dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="bootstrap-4.1.3-dist/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="filmovi.css">
    <script src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
</head>

<body data-spy="scroll" data-target="#navbarResponsive" style="background-color: #f1a566;">
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
    <a class="navbar-brand" href="dashboard.php?all"><h2 style="color: #f1a566;">My Imdb</h2></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
            
            <li>
                <form class="example" action="dashboard.php" style="margin:auto; padding: 10px 20px 0 0; max-width:1000px" method="post">
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
<div class="container-fluid" style="width:100%;   margin-bottom: -220px!important;">
<table style="top: 70px; position:relative;" >
<?php
 if(isset($_GET['film'])) {
    $mysqli = new mysqli('localhost', 'root', '', 'mydb') or die(mysqli_error($mysqli));
    $title=$_GET['film'];
    $res=$mysqli->query("SELECT * FROM films WHERE title='$title'") or die($mysqli->error);
 
    
    while($row = $res->fetch_assoc()):     
        ?>
            
                
            <tr>
                <td style="background-color: black;">
                  
                    <img class="image" style="width:370px; height:550px" src="<?php echo $row['images'] ?>"> 
                 
                </td>
                <td>
                    <div><p> <b> Title: </b><?php echo $row['title']?></p></div>
                    <div><p> <b> Year: </b>(<?php echo $row['year'] ?>)</p></div>
                    <div><p> <b> Time: </b><?php echo $row['time'] ?></p></div> 
                    <div><p> <b> Genre: </b><?php echo $row['genre'] ?></p></div>
                    <div><p> <b> Description: </b><?php echo $row['description'] ?></p></div>
                    <div><p> <b> Stars: </b><?php echo  $row['stars'] ?></p></div> </br>
                    <div><p> <b> Production: </b><?php echo $row['production']?></p></div> </br>
                    <div><p> <b> Director: </b><?php echo $row['director']?></p></div> </br>
                    <div><p> <b> Scenarist: </b><?php echo  $row['scenarist'] ?></div></p></br> <br>
                </td>
            </tr>
                 
            
            
        <?php endwhile;
 }   
      
?>   
</table>
</div>


</body>
</html>