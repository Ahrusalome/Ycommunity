<?php

spl_autoload_register(function(string $className) {
	require __DIR__ . "/class/" . $className . ".php";
});
