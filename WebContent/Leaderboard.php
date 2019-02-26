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

<div class="container">
    <h1 >Leaderboard</h1>
    <select>
        <option>All</option>
        <option>Rank</option>
        <option>Username</option>
        <option>Score</option>
        <option>Archivement</option>
    </select>
    <input type="text" style="text-align:center">
    <input type="button" value="Search">
    <table class="table">
        <thead class="table-secondary">
        <tr>
            <th scope="col">Rank</th>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
            <th scope="col">Archivement</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        </tbody>
    </table>
</div>
</body>

</html>
