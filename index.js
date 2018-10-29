/* code goes here */
/*
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector("div#hidden-div").innerText='301;'
})


document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("div#hidden-div").innerHTML = '301';
})
*/

document.addEventListener("DOMContentLoaded", function myFunction() {
    var str = document.getElementById("div#hidden-div").innerHTML; 
    var res = str.replace("300", "301");
    document.getElementById("div#hidden-div").innerHTML = res;
})