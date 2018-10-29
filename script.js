/*
document.addEventListener("DOMContentLoaded", e => {
  document.querySelector("body").addEventListener("click", e => console.log("Reggae, Reggae!"));
})
*/

/*

document.querySelector("div#hidden-div").addEventListener("change", function() {
  "div#hidden-div".innerText ='301'
})


document.addEventListener("DOMContentLoaded", e => {
  document.getElementById("hidden-div").innerText = "301!";
})
*/

document.querySelector("body").addEventListener("load", function(){
    document.getElementById("hidden-div").innerHTML = "301";
});