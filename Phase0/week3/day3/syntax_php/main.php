<?php

    echo "Hello world\n";

    $pesan = "halo dunia";

    echo "pesan = " .$pesan ."\n";

    $a = "13";
    $b = 10;

    echo $a + $b . "\n"; //23

    echo $a . $b; //1310

    // if else sama pada umumnya if (condition) else {action};


    // meggunakan method GET POST (refer to main.php)
    // $name = @$_GET['name'];
    // $alamat = @$_GET['alamat'];

    // $name = @$_POST['name'];
    // $alamat = @$_POST['alamat'];

    // if($name){
    //     echo "<strong>nama:</strong> {$name} <br>";
    // }
    
    // if($alamat){
    //     echo "<strong>alamant:</strong> {$alamat} <br>";
    // }

    // echo $_REQUEST['name'];  // $_REQUEST -> akan menerima method sesuai pada form
                                // jika method post, $_REQUEST menjadi $_POST
                                // jika method get, $_REQUEST menjadi $_GET
    // echo "<br />";
    // echo $_REQUEST['alamat'];

?>
