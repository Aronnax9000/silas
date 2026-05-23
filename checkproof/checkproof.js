// Checkproof

var truths_element
var proof_element

function validate_proof() {
  
}
  

document.addEventListener("DOMContentLoaded", function(event) { 
  truths_element = document.getElementById("truths")
  seed_truths()
  display_truths()
  // Add button click listener
  document.getElementById("do_check").addEventListener("click", check_proof)
});


var truths = []

function seed_truths() {
  truths.push("0 Rule 0")
}

function display_truths() {
  var
  truths_element.innerHTML = "Current Truths: " + truths.length + "\n"
  truths.forEach((value, index, array) => {
    truths_element.innerHTML +=  "Truth " + index + ": " + value + "\n"
  })
}

function check_proof() {
  validate_proof()
  display_truths()
}
