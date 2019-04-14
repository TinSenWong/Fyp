<?php
$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');

session_start();
$userID = $_SESSION["userID"];
//$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
$sql = "SELECT * FROM Achievementdata WHERE UserID = $userID";

$result = mysqli_query($conn, $sql);
$OwmAchievements = array();
$percent = array();
$NoAchievements = array();
$
if (mysqli_num_rows($result)>0){
    while ($values = mysqli_fetch_assoc($result)) {
        $sql = "SELECT * FROM achievement WHERE AchievementID = {$values['AchievementID']}";
        $achievementResults = mysqli_query($conn, $sql);
        while ($achievement = mysqli_fetch_assoc($achievementResults)) {
            array_push($OwmAchievements, $achievement['AchievementName']);
        }
        array_push($percent, $values['PercentComplete']);
    }
}
$not = '';
$lastElement = end($OwmAchievements);

foreach ($OwmAchievements as $OwmAchievement){
    if ($lastElement == $OwmAchievement){
        $not .= "NOT AchievementName ='" . $OwmAchievement . "'";
    }else{
        $not .= "NOT AchievementName ='" . $OwmAchievement . "' AND";
    }
}
$sql = "SELECT * FROM Achievement where $not";
echo $sql;
$achievementResults = mysqli_query($conn, $sql);

while ($achievement = mysqli_fetch_assoc($achievementResults)) {
    array_push($NoAchievements, $achievement['AchievementName']);
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
<body style=" background-color: rgb(25, 34, 50);">
<br />
<div class="container">
    <h1 style="color: white">Achievement List</h1>

    <?php
    $count = 0;
    foreach ($OwmAchievements as $OwmAchievement){
        echo " <div class=\"achievement-box\">a
                        <div class=\"achievement-box-icon\">
                        </div>
                        <div class=\"achievement-box-namebar-area\">
                            <span>$OwmAchievement</span>
                            <div class=\"achievement-box-bar\">
                                <div class=\"achievement-box-status-{$percent[$count++]}\">
                                </div>
                            </div>
                        </div>
                    </div>";
    }
    ?>
</div>

</body>
</html>
