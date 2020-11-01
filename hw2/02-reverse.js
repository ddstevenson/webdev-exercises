// Enter your code here
function validateForm(){
    var input = document.getElementById("input").value.trim();
    if(input.length != 8){
        document.getElementById("msg").innerHTML = "You must enter exactly eight (8) digits.";
        return false;
    } else if(isNaN(input)){ // This case shouldn't come up often as the form is numeric-only.
        document.getElementById("msg").innerHTML = "You must enter eight NUMERIC characters.";
        return false;
    } else { // input is valid
        document.getElementById("output").innerHTML = input.split("").reverse().join("");
        return false;
    }
}