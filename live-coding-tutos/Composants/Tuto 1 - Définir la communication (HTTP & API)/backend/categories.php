<?php
header('Content-Type: application/json');

$categories=[
    [
        "id"=>1,
        "nom"=>"desing"
    ],
    [
        "id"=>2,
        "nom"=>"devlopement"
    ]

];

echo json_encode($categories);
?>