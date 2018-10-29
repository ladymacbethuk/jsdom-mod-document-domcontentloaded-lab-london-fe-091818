/* code goes here */
/*
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector("div#hidden-div").innerText='301;'
})


document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("div#hidden-div").innerHTML = '301';
})
*/

document.addEventListener("DOMContentLoaded", function() {
    let str = document.getElementById("hidden-div").innerHTML; 
    let res = str.replace("300", "301");
    document.getElementById("hidden-div").innerHTML = res;
})