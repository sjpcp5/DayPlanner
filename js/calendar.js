// Code for Modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

$("#clear-yes").on("click", function () {
  $(".display_data").empty();
  $("#monstPage").addClass("dn");

  $("#name").val("");
  $("#hitlow").val("");
  $("#hithigh").val("");
  $("#armormin").val("");

  $(".waiting").remove();
  mainReset();

  monstActionArray.length = 0;
  monstProfArray.length = 0;
  modal.style.display = "none";
});

$("#clear-no").on("click", function () {
  modal.style.display = "none";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
