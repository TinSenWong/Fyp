<?php
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
    if ($_POST['Action'] == 'insertLVStar') {
        $userID = $_POST['userID'];
        $lvNum = $_POST['lv'];
        $star = $_POST['star'];
        //$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
        $sql = "SELECT * FROM user_star WHERE userID = $userID and LevelNum = $lvNum";
        $result = mysqli_query($conn, $sql);
        $resultRow = mysqli_num_rows($result);
        if (mysqli_num_rows($result) > 0) {
            while ($values = mysqli_fetch_assoc($result)) {
                if ($values['star'] < $star) {
                    $sql = "UPDATE user_star SET Star= $star WHERE ID = {$values['ID']}";
                }
            }
        }else{
            $sql = "INSERT INTO user_star(UserID, LevelNum, Star) VALUES ($userID,$lvNum,$star)";
        }


        mysqli_query($conn, $sql);
    }
} else {
    echo "fail" . $conn->error;
}


?>