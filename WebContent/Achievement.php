<?php
$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');

session_start();
$userID = $_SESSION["userID"];
//$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
$sql = "SELECT * FROM Achievementdata WHERE UserID = $userID order by AchievementID";

$result = mysqli_query($conn, $sql);
$OwmAchievements = array();
$percent = array();
$description = array();
$imgsrc = array();
if (mysqli_num_rows($result)>0){
    while ($values = mysqli_fetch_assoc($result)) {
        $sql = "SELECT * FROM achievement WHERE AchievementID = {$values['AchievementID']}";
        $achievementResults = mysqli_query($conn, $sql);
        while ($achievement = mysqli_fetch_assoc($achievementResults)) {
            array_push($OwmAchievements, $achievement['AchievementName']);
            array_push($description, $achievement['Description']);
            array_push($imgsrc, $achievement['imgSrc']);
        }
        array_push($percent, round($values['PercentComplete']));
    }
}
$not = '';
$lastElement = end($OwmAchievements);

foreach ($OwmAchievements as $OwmAchievement){

    if ($lastElement == $OwmAchievement){
        $not .= " NOT AchievementName ='" . $OwmAchievement . "'";
    }else{
        $not .= " NOT AchievementName ='" . $OwmAchievement . "' AND";
    }
}
if ($not == ''){
    $sql = "SELECT * FROM Achievement";
}else {
    $sql = "SELECT * FROM Achievement where $not";
}
echo $sql;
$achievementResults = mysqli_query($conn, $sql);
$NoAchievements = array();
$descriptionNoA = array();
$percentNoA = array();
$imgsrcNoA = array();
while ($achievement = mysqli_fetch_assoc($achievementResults)) {
    array_push($NoAchievements, $achievement['AchievementName']);
    array_push($descriptionNoA, $achievement['Description']);
    array_push($imgsrcNoA, $achievement['imgSrc']);

}



?>
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
    foreach ($OwmAchievements as $OwmAchievement) {
        if ($percent[$count] == 100) {
            echo " <div class=\"achievement-box\" title='$description[$count]'>
                        <div class=\"achievement-box-icon\"> <img src='src/Achievement/$imgsrc[$count]' width='100' height='100' alt=''>
                        </div>
                        <div class=\"achievement-box-namebar-area\">
                            <span>$OwmAchievement</span>
                            <div class=\"progress\">
                                     <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{$percent[$count]}%\">
                                </div>
                            </div>
                        </div>
                    </div>";
        } else {
            echo " <div class=\"achievement-box\" title='$description[$count]'>
                        <div class=\"achievement-box-icon\"> <img src='src/Achievement/$imgsrc[$count]' width='100' height='100' alt=''>
                        </div>
                        <div class=\"achievement-box-namebar-area\">
                            <span>$OwmAchievement</span>
                            <div class=\"progress\">
                                     <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:{$percent[$count]}%\">
                                </div>
                            </div>
                        </div>
                    </div>";
        }
        $count++;

    }
    $count = 0;
    ?>

    <br >
    <br >
    <?php
    foreach ($NoAchievements as $noAchievement){
        echo " <div class=\"achievement-box\" title='$descriptionNoA[$count]'>
                        <div class=\"achievement-box-icon\"><img src='src/Achievement/$imgsrcNoA[$count]' width='100' height='100' alt=''>
                        </div>
                        <div class=\"achievement-box-namebar-area\">
                            <span>{$NoAchievements[$count++]}</span>
                            <div class=\"achievement-box-bar\">
                                <div class=\"achievement-box-status-0\">
                                </div>
                            </div>
                        </div>
                    </div>";
    }
    ?>
</div>

</body>
</html>
