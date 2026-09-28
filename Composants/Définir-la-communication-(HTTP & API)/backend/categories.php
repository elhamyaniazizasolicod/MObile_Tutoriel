<?php
header('Content-Type: application/json');

$categories = [
    ["id" => 1, "nom" => "Développement Web"],
    ["id" => 2, "nom" => "Design UI/UX"]
];

echo json_encode($categories);
?>