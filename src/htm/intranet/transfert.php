<!DOCTYPE html>
<html>
    <head>
        <base href='./'>
        <meta name='author' content='RISOLI Lorenzo'>
        <meta name='version' content='1.0'>
        <meta name='date' content='January 20, 2022'>
        <meta name='keywords' content='Lorenzo RISOLI, Loris'>
        <meta name='description' content='Pages personnelles - Lorenzo RISOLI'>
        <meta name='generator' content='UltraEdit Portable Text/Hex Editor (x64) Version 28.00.0.116'>
        <meta http-equiv='content-type' content='text/html; charset=UTF-8'>
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico'>
        <link rel='icon' type='image/png' href='./png/free.png'>
        <title>Pages personnelles - Lorenzo RISOLI - Transfert</title>
        <style type='text/css'>
            <!--
            #Tableau{
            	width: 100%;
            }
            #Entete{
                color: #ffffff;
                background-color: #000000;
            }
            #Entete h1{
                font: bold 150% Arial, sans-serif;
                padding-top: 0.5em;
                padding-left: 1em;
                padding-bottom: 0;
                margin: 0;
            }
            #Corps{
                margin: 3em 2em;
                padding: 0;
                font-family: Verdana, sans-serif;
            }
            #Corps h2{
                font: 100% Arial, sans-serif;
                text-align: right;
            }
            #Corps p{
                font-size: 0.85em;
            }
            -->
        </style>
    <body>
        <table id='Tableau'>
            <tr>
                <td id='Entete'>
                    <h1>
                        Liste des transferts
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <div id='Corps'>
                        <h2>
                            <a href='./htm/intranet/publication.htm'>Retour à la page de publication</a>
                        </h2>
                        <p>
<?php
$fileList = glob('./pub/*');

foreach($fileList as $filename){
    if(is_file($filename)){
        echo basename($filename), '<br>'; 
    }   
}
?>
                        </p>
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>
