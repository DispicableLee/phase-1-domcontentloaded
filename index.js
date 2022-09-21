// Your code goes here
function changeContent(){
  const changed = document.getElementById("text")
  changed.textContent = "Wow this is cool!"
}

document.addEventListener("DOMContentLoaded", function(e) {
    console.log("The DOM has loaded");
    changeContent();
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

