<?php
$host = "localhost";
$user = "root";
$password = "";
$db_name = "pricing";

$link = new mysqli($host, $user, $password, $db_name);

// Проверка на подключение к базе
if ($link->connect_error)
{
    die ("Connection failed: " . $link->connect_error);
}

$name = $_POST['name'];
$tel = $_POST['tel'];

echo $name . ' -  name' . "\n";
echo $tel . ' -  tel' . "\n1213213213";


$query = mysqli_query($link, "INSERT INTO `callbacks` (`id`,`NaS`,`tel`) VALUES (NULL, '$name', '$tel')")
?>