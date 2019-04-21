<?php
/**
 * Created by PhpStorm.
 * User: Andy
 * Date: 2019/4/21
 * Time: 下午 03:07
 */

$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');

if ($conn) {

        $userID = $_POST['userID'];
        $AchievementID = $_POST['AchievementID'];
        $p = $_POST['p'];

        //$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
        $sql = "SELECT * FROM achievementdata WHERE userID = $userID and AchievementID = $AchievementID";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            // when
            while ($values = mysqli_fetch_assoc($result)) {
                if ($values['PercentComplete'] < 100) {
                    $p = $p + $values['PercentComplete'];
                    if ($p > 100 || $p == 99.99) {
                        $p = 100;

                    }
                    $sql = "UPDATE achievementdata SET PercentComplete = $p WHERE ID = {$values['ID']}";
                    mysqli_query($conn, $sql);
                }
            }
        }else {

            $sql = "INSERT INTO achievementdata (UserID, AchievementID, PercentComplete) VALUES ($userID ,$AchievementID,$p)";
            mysqli_query($conn, $sql);
            if ($p == 100){
                $sql = "SELECT * FROM achievement WHERE AchievementID = $AchievementID";
                $result = mysqli_query($conn, $sql);
                while ($values = mysqli_fetch_assoc($result)) {
                    echo "Accomplish : " . $values['AchievementName'];
                }
            }
        }
}else{
    return 'connect error';
}