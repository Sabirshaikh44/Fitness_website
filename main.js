let hamburger_btn = document.getElementById("hamburger_btn");
let nav_links = document.getElementById("navbar_links");
hamburger_btn.addEventListener("click", function (e) {
  if (nav_links.style.display != "block") {
    nav_links.style.display = "block";
  } else {
    nav_links.style.display = "none";
  }
});
let submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click",(e)=>{
  submit_btn.innerText = "SUCESSFULLY SENT..!";
})