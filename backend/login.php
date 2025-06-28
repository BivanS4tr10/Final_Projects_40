<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "nama_database");

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    echo json_encode([
        "status" => true,
        "message" => "Login Berhasil",
        "user" => $user
    ]);
} else {
    echo json_encode([
        "status" => false,
        "message" => "Email atau Password salah"
    ]);
}
?>
