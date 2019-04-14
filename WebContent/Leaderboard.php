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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Leaderboard</title>

</head>

<body>
<?php include 'Heading.php'; ?>

<br/>
<br/>
<div class="container">
    <h1 >Leaderboard</h1>
    <select>
        <option>All</option>
        <option>Rank</option>
        <option>Star Range</option>
    </select>
    <input type="text" style="text-align:center">
    <input type="button" value="Search" class="btn-primary">
    <table class="table">
        <thead class="table-secondary">
        <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">Total star</th>
        </tr>
        </thead>
        <tbody>
        <?php
        $count = 0;
            foreach ($userNames as $userName){
                if ($userName == $_COOKIE['username']){
                    echo "<tr style='background: coral'>";
                    echo "<th scope='row'>" . ($count + 1) ."</th>";
                    echo "<td>$userName</td>";
                    echo "<td>$stars[$count]</td>";
                    echo "</tr>";
                }else {
                    echo "<tr>";
                    echo "<th scope='row'>" . ($count + 1) . "</th>";
                    echo "<td>$userName</td>";
                    echo "<td>$stars[$count]</td>";
                    echo "</tr>";
                }
                $count++;
            }
        ?>

        </tbody>
    </table>
</div>
</body>

</html>
