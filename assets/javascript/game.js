$(document).ready(function () {
  //creating local variable
  var playerLife = 20;
  var oppLife = 20;
  const p1 = $("#lifeNumber");
  const p2 = $("#lifeOpp");

  //display life total
  p1.text("" + playerLife);
  p2.text("" + oppLife);

  //create on click function for add/subtract to life total
  $("#playerAdd").on("click", function () {
    playerLife++;
    p1.text("" + playerLife)
  });

  $("#playerSub").on("click", function () {
    playerLife--;
    p1.text("" + playerLife)
  });

  $("#oppAdd").on("click", function () {
    oppLife++;
    p2.text("" + oppLife)
  });

  $("#oppSub").on("click", function () {
    oppLife--;
    p2.text("" + oppLife)
  });

  function myFunction() {
    var x = document.getElementById("taskBar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $("#refresh").on("click", function () {
    playerLife = 20;
    p1.text("" + playerLife)
    oppLife = 20;
    p2.text("" + oppLife)
  });

  $("#lifeChange").on("click", function () {
    if (playerLife === 20) {
      playerLife = 40;
      p1.text("" + playerLife)
      oppLife = 40;
      p2.text("" + oppLife)
    }
    else {
      playerLife = 20;
      p1.text("" + playerLife)
      oppLife = 20;
      p2.text("" + oppLife)
    }

  });

  const d1 = () => Math.floor(Math.random() * 6 + 1);
  const d2 = () => Math.floor(Math.random() * 6 + 1);

  $("#diceRoll").on("click", function () {
    d1();
    d2();

  });

});