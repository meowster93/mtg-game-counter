$(document).ready(function () {
    //creating local variable
    var playerLife = 20;
    var opponentLife = 20;

    //display life total
    $("#lifeNumber").text("" + playerLife);
    $("#lifeOpp").text("" + opponentLife);

    //create on click function for add/subtract to life total
    $("#playerAdd").on("click", function() {
        playerLife++;
        $("#lifeNumber").text("" + playerLife)
    }); 

    function myFunction() {
        var x = document.getElementById("taskBar");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      } 

});