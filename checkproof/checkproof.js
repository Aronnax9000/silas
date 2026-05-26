// Checkproof

var truths_element
var proof_element
var thing_to_prove_element
var message_element
var truths = []

function display(message) {
  message_element.innerHTML += message + "\n"
}

function validate_proof(thing_to_prove, proof) {

}

function check_line(proof_line) {
  var success = false
  if(check_rule_0(proof_line)) { 
    truths.push(proof_line + " Rule 0")
  } else if(check_rule_S(proof_line)) {
    display("pushing " + proof_line)
    truths.push(proof_line + " Rule S")
  }
}

function check_rule_0(proof_line) {
  return (proof_line == '0')
}

function check_rule_S(proof_line) {
  
  truths.some((truth) => { 
    carving = "S" + truth.split(" ")[0]
    display('rule S: ' + proof_line + "C" + carving + ".")
    if(proof_line == carving) {
      display("it's true!")
       truths.push(proof_line + " Rule S")
      return true
    }
    return false
  })
}  

document.addEventListener("DOMContentLoaded", function(event) { 
  truths_element = document.getElementById("truths")
  thing_to_prove_element = document.getElementById("thing_to_prove")
  proof_element = document.getElementById("proof")
  message_element = document.getElementById("message")
  // Add button click listener
  document.getElementById("check_proof").addEventListener("click", check_proof)
});


function display_truths() {

  truths_element.innerHTML = "Current Truths: " + truths.length + "\n"
  truths.forEach((value, index, array) => {
    var truth = "Truth " + index + ": " + value + "\n"
    display(truth)
  })
}

function check_proof() {
  var thing_to_prove = thing_to_prove_element.value
  var proof = proof_element.value.split(/\r?\n/)
  if(thing_to_prove = "") {
    alert ('You must enter a thing to prove!')
    return false
  }
  if(proof.length == 0) {
    alert ('You must enter a proof!')
    return false
  }
  truths.length = 0
  display("Checking proof of " + thing_to_prove + ":\n" + proof)
  proof.every((proof_line) => check_line(proof_line))
  display_truths()
}
