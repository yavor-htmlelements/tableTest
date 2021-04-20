<?php


$result = [];
$result[] =array('nationalityID'=> '1','nationalityName'=> 'Greece' );
$result[] =array('nationalityID'=> '2','nationalityName'=> 'Bulgaria' );
$result[] =array('nationalityID'=> '3','nationalityName'=> 'Serbia' );
$result[] =array('nationalityID'=> '4','nationalityName'=> 'Romania' );
$result[] =array('nationalityID'=> '5','nationalityName'=> 'UK');
$result[] =array('nationalityID'=> '6','nationalityName'=> 'Italy' );
$result[] =array('nationalityID'=> '7','nationalityName'=> 'Croatia' );

header('Content-Type: application/json');

echo json_encode($result);

?>