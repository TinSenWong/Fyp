<?php
/**
 * Created by PhpStorm.
 * User: Andy
 * Date: 2019/4/13
 * Time: 下午 01:28
 */
if (isset($_GET['vkey'])){
    $vkey = $_GET['vkey'];

    $conn = new mysqli('localhost','root','','fyp');
    $result = $conn->query("SELECT verified,vkey FROM userInfo WHERE verified = 0 AND vkey = '$vkey' LIMIT 1");
    if ($result->num_rows == 1){
        $update = $conn->query("Update userInfo SET verified = 1 WHERE vkey = '$vkey' LIMIT 1");
        if ($update){
            echo "Your account has been verified. You can login now.";
            echo "<a href='LoginPage.php'>Login Page</a>";
        }
    }else{
        echo "This account invalid or already verified";
        echo "Please contact us if you have any question.";
    }

}else{
    die("Something wrong! <a onclick='window.history.back();'>Previous page</a>");
}

