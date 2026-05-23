// Checkproof

document.addEventListener("DOMContentLoaded", function(event) { 
  seed_truths()
  display_truths()
});


var truths = []

function seed_truths() {
  truths["0"] = "Rule 0"
}

function display_truths() {
  var truth_element = getElementById("truths")
  truth_element.innerHtml = ""
  truths.forEach(value, index => {
    truth_element.innerhtml += index + " " + value + "\n"
  })
}
