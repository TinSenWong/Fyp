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
    <h1>Leaderboard</h1>
    <select>
        <option>All</option>
        <option>Rank</option>
        <option>Username</option>
        <option>Score</option>
        <option>Archivement</option>
    </select>
    <input type="text" style="text-align:center">
    <input type="button" value="Search" class="btn-primary">
    <table class="table">
        <thead class="table-secondary">
        <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
            <th scope="col">Number of Archivement</th>
        </tr>
        </thead>
        <tbody>
        <!-- SELECT DB-->
        <?php
        $conn = GETSQLLink();

        $query = "SELECT * FROM `userinfo` ";

        $res = $conn->query($query);
        if ($res->num_rows > 0) {
            while ($row = $res->fetch_assoc()) {
                echo "<tr><th scope=\"row\" >" . $row["UserID"] . "</th><td>" . $row["userName"] . "</tr>";
            }
        } else {
            echo "0 结果";
        }
        $conn->close();
        ?>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>500</td>
            <td>10</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>400</td>
            <td>9</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>300</td>
            <td>5</td>
        </tr>
        <br/>
        <hr/>
        <tr style="background-color: red">
            <th>Your Rank: (#)</th>
            <td>Andy</td>
            <td>20</td>
            <td>5</td>
        </tr>
        </tbody>
    </table>
</div>
</body>

</html>