// Checkproof

var truths_element
var proof_element
var thing_to_prove_element
var truths = []

function validate_proof(thing_to_prove, proof) {
  alert("Checking proof of " + thing_to_prove + ":\n" + proof)
  proof.forEach((proof_line) => { check_line(proof_line) })
}

function check_line(proof_line) {
  var success = false
  if(check_rule_0(proof_line)) { 
    truths.push(proof_line + " " Rule 0")
  } else if(check_rule_S(proof_line)) {
    truths.push(proof_line + " " Rule S")
  }
}

function check_rule_0(proof_line) {
  if(proof_line == '0')
    return true
  return false
}
function check_rule_S(proof_line) {
  truths.forEach((truth) => { 
    carving = truth.split(" ")[0]
    if(proof_line == "S" + carving) {
      return true
    }
    return false
  })
}  

document.addEventListener("DOMContentLoaded", function(event) { 
  truths_element = document.getElementById("truths")
  thing_to_prove_element = document.getElementById("thing_to_prove")
  proof_element = document.getElementById("proof")
  // seed_truths()
  display_truths()
  // Add button click listener
  document.getElementById("check_proof").addEventListener("click", check_proof)
});

function seed_truths() {
  truths.push("0 Rule 0")
}

function display_truths() {

  truths_element.innerHTML = "Current Truths: " + truths.length + "\n"
  truths.forEach((value, index, array) => {
    truths_element.innerHTML +=  "Truth " + index + ": " + value + "\n"
  })
}

function check_proof() {
  var thing_to_prove = thing_to_prove_element.value
  var proof = proof_element.value.split(/\r?\n/)
  
  validate_proof(thing_to_prove, proof)
  display_truths()
}
