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
    document.open("text/html","replace");
    document.write("<h2>Learning about the HTML DOM is fun!</h2>");
    document.close();
})