<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel='stylesheet' href='style.css'/>
    <script defer src="jquery-3.6.1.js"></script>
    <script defer src="loop.js"></script>
    <title>Random Loop</title>
  </head>
  <body>
      <table border="1">
        <tr>
          <?php
            for($i=0; $i<15; $i++){
              echo "<td class='srednia'>".rand(1,9)."</td>";
            }
          ?>
        </tr>
      </table>
      <button name="button" id="oblicz">Oblicz</button>
  </body>
</html>
