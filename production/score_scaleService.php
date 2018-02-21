<?php
$sql="SELECT description,`score_scale`.*,'' as actions FROM `score_scale` left join `score_type` on `score_scale`.`score_type_id`=`score_type`.`id` where score_type_id=".preg_replace('/[^a-z0-9_]+/i','',$request[3]);
?>