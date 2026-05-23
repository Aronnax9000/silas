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
  var truth_element = document.getElementById("truths")
  truth_element.innerHtml = ""
  truths.forEach(value, index, array => {
    text_to_add = index + " " + value + "\n"
    alert(text_to_add)
    truth_element.innerhtml += text_to_add
  })
}
