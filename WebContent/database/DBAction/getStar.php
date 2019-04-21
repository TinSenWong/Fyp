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
    if ($_POST['Action'] == 'getStar') {
        $userID = $_POST['userID'];
        //$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
        $sql = "SELECT star FROM user_star WHERE userID = $userID  order by LevelNum";

        $counter = 0;

        $result = mysqli_query($conn, $sql);
        $resultRow = mysqli_num_rows($result);

        while ($values = mysqli_fetch_assoc($result)) {
            if (++$counter == $resultRow) {
                echo $values['star'];
            } else echo $values['star'] . ',';
        }
    }
}else{
    return 'connect error';
}