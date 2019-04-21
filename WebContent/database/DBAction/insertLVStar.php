<?php
/**
 * Created by PhpStorm.
 * User: Andy
 * Date: 2019/4/21
 * Time: 下午 03:06
 */

$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');
if ($conn) {
    if ($_POST['Action'] == 'insertLVStar') {
        $userID = $_POST['userID'];
        $lvNum = $_POST['lv'];
        $star = $_POST['star'];
        //$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
        $sql = "SELECT * FROM user_star WHERE userID = $userID and LevelNum = $lvNum";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            while ($values = mysqli_fetch_assoc($result)) {
                if ($values['Star'] < $star) {
                    $sql = "UPDATE user_star SET Star= $star WHERE ID = {$values['ID']}";
                }
            }
        }else{
            $sql = "INSERT INTO user_star(UserID, LevelNum, Star) VALUES ($userID,$lvNum,$star)";
        }


        mysqli_query($conn, $sql);
    }
}else{
    return 'connect error';
}