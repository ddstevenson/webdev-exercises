// Enter your code here
function logForm(){
    console.log(
    `   name: ${document.getElementById("name").value}
    email: ${document.getElementById("email").value}
    comments: ${document.getElementById("message").value}
    name: ${document.getElementById("checkbox1").checked ? 'on' : 'off'}`
    );
    return false;
}