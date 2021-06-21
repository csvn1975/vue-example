<?php
   if (!empty($_FILES)) {
        header('Access-Control-Allow-Origin: *'); 
        
        try {
            foreach($_FILES["files"]['tmp_name'] as $index => $file) {
                $targetFileName = "images/". round(microtime(true)*10000) . '_' . $_FILES['files']['name'][$index];
                move_uploaded_file($file, $targetFileName);
            };
            echo "done";
        } catch (\Throwable $th) {
            echo "failure";
        }
    }
    else {
       echo "choose a file please";
   }
  
?>