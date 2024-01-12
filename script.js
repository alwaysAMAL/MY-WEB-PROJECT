const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("change", function () {
  document.body.style.backgroundColor = this.checked ? "rgb(10, 10, 42)" : "";
  if (this.checked) {
    document.querySelector(".intro").style.color = "#fff";
    document.querySelector(".salute").style.color = "#fff";
    document.querySelector(".theme").style.color = "rgb(35, 104, 241)";
  } else {
    document.querySelector(".intro").style.color = "#000";
    document.querySelector(".salute").style.color = "#000";
    document.querySelector(".theme").style.color = "";
  }
});
