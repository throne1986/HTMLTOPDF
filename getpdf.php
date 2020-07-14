<?php
namespace Dompdf;
require_once 'dompdf/autoload.inc.php';

// if (isset($_POST['correctAnswer'])) {
    
        $dompdf = new Dompdf(); 
        $correctAnswer = $_POST['correctAnswer'];
        echo $correctAnswer;
var_dump('kurwa', $correctAnswer);

        $dompdf->loadHtml('
        <table border=1 align=center width=400>
        <tr><td>Name : </td><td>'.$_POST['correctAnswer'][0].'</td></tr>
        <tr><td>Email : </td><td>'.$_POST['correctAnswer'][1].'</td></tr>
        <tr><td>Age : </td><td>'.$_POST['correctAnswer'][2].'</td></tr>
        <tr><td>Country : </td><td>'.$_POST['correctAnswer'][3].'</td></tr>
        </table>
        ');
        $dompdf->setPaper('A4', 'landscape');
        $dompdf->render();
        $dompdf->stream("",array("Attachment" => false));
        exit(0);

    // }else{
    //     echo 'kurwa ja pierdole';
    // }

?>