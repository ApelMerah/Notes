<?php

	function executeQuery( $query )
	{
		$conn = mysql_connect('localhost','prk','prk');
		mysql_select_db('prk', $conn);
		return mysql_query($query, $conn);
	}

?>