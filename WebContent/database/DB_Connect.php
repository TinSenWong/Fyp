<?php
$serverName = "127.0.0.1";
$DBName = "fyp";
$userName = "root";
$password = "";
$conn = mysqli_connect($serverName, $userName, $password, $DBName) or die('Error connection');

if ($_REQUEST['functionName']=='a') {
    $userID = $_REQUEST['userID'];

    //$sql = "INSERT INTO user_star ($LevelNum, $UserID, $star) VALUES ('John', 'Doe', 'john@example.com')";
    $sql = "SELECT star FROM user_star WHERE userID = 1 order by LevelNum";
    $counter = 0;
    if ($conn) {
        $result = mysqli_query($conn,$sql);
        $resultRow=mysqli_num_rows($result);
        while ($values = mysqli_fetch_assoc($result)){
            if(++$counter == $resultRow) {
                echo $values['star'];
            }else echo $values['star'] . ',';
        }
    } else {
        echo "fail" . $conn->error;
    }
}
 ?>