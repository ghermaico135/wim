<?php

require_once "./db.php";

class Model extends Database{
    public function register($fname,$lname,$username,$email,$phone,$password){
        
        $stmt = $this->conn->prepare("INSERT INTO student(fname,lname,username,email,phone,password) VALUES (?,?,?,?,?,?)");
        $stmt->bind_param("ssssss",$fname,$lname,$username,$email,$phone,$password);
        $stmt->execute();

        if($stmt->num_rows() > 0){
            $status = 1;
        } else{
            $status = 0;
        }
        return $status;

    }
}