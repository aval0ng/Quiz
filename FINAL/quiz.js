function submitForms() {

var fortune = document.querySelector("#fortune");
fortune.innerHTML = document.querySelector('input[name = "height"]:checked').value + " " +
    document.querySelector('input[name = "element"]:checked').value + " " +
    document.querySelector('input[name = "time"]:checked').value + " " +
    document.querySelector('input[name = "tip"]:checked').value + " " +
    document.querySelector('input[name = "pets"]:checked').value;
fortune.style.display = "block";
}
/*My project was working before, but dad explained a more efficient way to get all the values, instead of writing separate fortunes for each combination of clicks since each of the buttons already as a value*/

function clearFortunte() {
  document.getElementById("fortune").innerHTML ="";
}
