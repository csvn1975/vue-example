<?php
   if (!empty($_FILES)) {
        header('Access-Control-Allow-Origin: *'); 
        
        if (move_uploaded_file($_FILES["file"]["tmp_name"], 
            "images/". round(microtime(true)*10000) . '_' .$_FILES['file']['name'])) {
            echo "done";
            exit;
        }
    }
    else {
       echo "choose a file please";
   }
  
?>