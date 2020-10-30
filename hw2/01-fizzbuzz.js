// Enter your code here
fzbz(100);

function fzbz(num) {
    for(x=0; x<=num; ++x){
        var output = "";
        if(x % 3 == 0 && x % 5 == 0){
            output = "fizzbuzz"
        } else if(x % 3 == 0){
            output = "fizz"
        } else if (x%5 == 0){
            output = "buzz"
        } else {
            output = x;
        }
        document.getElementById("results").innerHTML += (output + "<br>");
    }
  }