// Checkproof

document.addEventListener("DOMContentLoaded", function(event) { 
  seed_truths()
  display_truths()
});


var truths = []

function seed_truths() {
  truths.push("0 Rule 0")
}

function display_truths() {
  var truth_element = document.getElementById("truths")
  truth_element.innerHTML = "Current Truths:\n"
  truths.forEach(value, index, array => {
    truth_element.innerHTML +=  "Truth " + value + "\n"
  })
}
