// Checkproof

var truths_element
var proof_element
var thing_to_prove_element

function validate_proof(thing_to_prove, proof) {
  alert("Checking proof of " + thing_to_prove)
}
  

document.addEventListener("DOMContentLoaded", function(event) { 
  truths_element = document.getElementById("truths")
  thing_to_prove_element = document.getElementById("thing_to_prove")
  seed_truths()
  display_truths()
  // Add button click listener
  document.getElementById("check_proof").addEventListener("click", check_proof)
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
  var thing_to_prove = thing_to_prove_element.value\
  var proof = thing_to_prove_element.innerHTML.split('\n');
  
  validate_proof(thing_to_prove, proof)
  display_truths()
}
