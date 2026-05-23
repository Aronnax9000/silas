// Checkproof

document.addEventListener("DOMContentLoaded", function(event) { 
  seed_truths()
  display_truths()
  // Add button click listener
  document.getElementById("do_check").addEventListener("click", do_check)
});


var truths = []

function seed_truths() {
  truths.push("0 Rule 0")
}

function display_truths() {
  var truth_element = document.getElementById("truths")
  truth_element.innerHTML = "Current Truths " + truths.length + ":\n"
  truths.forEach((value, index, array) => {
    truth_element.innerHTML +=  "Truth " + value + "\n"
  })
}

function do_check() {
  alert("do_check")
}
