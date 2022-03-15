<?php

class Database
{

    private $hostName = "localhost";
    private $user = "root";
    private $password = "";
    private $db = "wims_db";

    public $conn;

    public function __construct()
    {
        try {
            $this->conn = new mySqli($this->hostName, $this->user, $this->password, $this->db);

        } catch (Exception $e) {
            echo "Error" . $e->getMessage;
        }

        return $this->conn;

    }

    public function check_input($input)
    {
        $input = trim($input);
        $input = splash($input);
        $input = htmlspecialchars($input);

        return $input;
    }
}

// $obj = new Database();
