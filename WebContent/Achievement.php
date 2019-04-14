<?php
$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');

session_start();
$userID = $_SESSION["userID"];
//$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
$sql = "SELECT userid,SUM(star) as TotalStar from user_star group by userid order by TotalStar desc";

$result = mysqli_query($conn, $sql);
$userNames = array();
$stars = array();
if (mysqli_num_rows($result)>0){
    while ($values = mysqli_fetch_assoc($result)) {
        $sql = "SELECT userName FROM userinfo WHERE UserID = {$values['userid']}";
        $users = mysqli_query($conn, $sql);
        while ($user = mysqli_fetch_assoc($users)) {
            array_push($userNames, $user['userName']);
        }
        array_push($stars, $values['TotalStar']);
    }
}



?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/archivement.css">
    <title>Document</title>
</head>
<?php include "Heading.php"; ?>
<body>
<div class="container">
    <h1 style="color: white">Achievement List</h1>
    <div class="achievement-box">
        <div class="achievement-box-icon">
        </div>
        <div class="achievement-box-namebar-area">
            <span>achievement0</span>
            <div class="achievement-box-bar">
                <div class="achievement-box-status-0">

                </div>
            </div>
        </div>
    </div>


    <div class="achievement-box">
        <div class="achievement-box-icon">
        </div>
        <div class="achievement-box-namebar-area">
            <span>achievement1</span>
            <div class="achievement-box-bar">
                <div class="achievement-box-status-25">

                </div>
            </div>
        </div>
    </div>
    <div class="achievement-box">
        <div class="achievement-box-icon">
        </div>
        <div class="achievement-box-namebar-area">
            <span>achievement2</span>
            <div class="achievement-box-bar">
                <div class="achievement-box-status-50">
                </div>
            </div>
        </div>
    </div>
    <div class="achievement-box">
        <div class="achievement-box-icon">
        </div>
        <div class="achievement-box-namebar-area">
            <span>achievement3</span>
            <div class="achievement-box-bar">
                <div class="achievement-box-status-75">
                </div>
            </div>
        </div>
    </div>
    <div class="achievement-box">
        <div class="achievement-box-icon">
        </div>
        <div class="achievement-box-namebar-area">
            <span>achievement4</span>
            <div class="achievement-box-bar">
                <div class="achievement-box-status-100">
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
