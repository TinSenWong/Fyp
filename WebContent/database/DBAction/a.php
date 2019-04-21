<?php
/**
 * Created by PhpStorm.
 * User: Andy
 * Date: 2019/4/21
 * Time: 下午 05:54
 */
$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');
$p = 100;
$AchievementID = 5;



if ($p == 100){
    $sql = "SELECT * FROM achievement WHERE AchievementID = $AchievementID";
    $result = mysqli_query($conn, $sql);
    while ($values = mysqli_fetch_assoc($result)) {
        echo "Accomplish : " . $values['AchievementName'];
    }
}