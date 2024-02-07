<?php
    session_start();

    if(!isset($_SESSION['data'])){
        $_SESSION['data'] = [];
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['create'])) { 
            $newItem = ['id' => uniqid(), 'name' => $_POST['name']];
            array_push($_SESSION['data'], $newItem);
            // print_r($_SESSION['data']);
        }

        if(isset($_POST['update'])) { 
            foreach ($_SESSION['data'] as &$item) {
                if($item['id'] == $_POST['id']){
                    $item['name'] = $_POST['name'];
                    break;
                }
            }
        }

        if(isset($_POST['delete'])) {
            foreach ($_SESSION['data'] as $key => $item) {
                if($item['id'] == $_POST['id']){
                    print_r($_SESSION['data'][$key]);
                    unset($_SESSION['data'][$key]);
                    break;
                }
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membuat Form Sederhana</title>
    <script>
        function setData(id, name) {
            document.getElementById('id').value = id;
            document.getElementById('name').value = name;
        }
    </script>
</head>
<body>
    <form method="POST">
        <div>
            <label for="id">ID</label>
            <input id="id" name="id" type="text">
        </div>
        <div>
            <label for="name">Name</label>
            <input id="name" name="name" type="text">
        </div>
        <div>
            <button name="create" type="submit">Create</button>
        </div>
        <div>
            <button name="update" type="submit">Update</button>
        </div>
        <div>
            <button name="delete" type="submit">Delete</button>
        </div>
    </form>

    <h2>data</h2>
    <ul>
        <?php foreach ($_SESSION['data'] as $item): ?>
            <li>
                ID: <?= $item['id'] ?>, Name: <?= $item['name'] ?>
                <button onclick="setData('<?= $item['id'] ?>', '<?= $item['name'] ?>')">Update</button>
                <button onclick="setData('<?= $item['id'] ?>', ''); document.querySelector('form').submit();">Delete</button>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>