<?php
header('Content-Type:application/json');

$categories=[
    ["id"=>1,"nom"=>"aziza","description"=>"deiopzieopzie"],
    ["id"=>2,"nom"=>"ezoiou","description"=>"jzdkzaiepozpei"]
];
echo json_encode($categories);
?>