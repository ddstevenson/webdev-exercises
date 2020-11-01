// Enter your code here
window.addEventListener('resize', printwh);
printwh();
function printwh(){
    document.getElementById("width").innerHTML = window.innerWidth;
    document.getElementById("height").innerHTML = window.innerHeight;
}
