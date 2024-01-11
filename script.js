const toggle = document.getElementById("toggle-btn");
toggle.addEventListener("change", function () {
  document.body.style.backgroundColor = this.checked ? "rgb(10, 10, 42)" : "";
  document.querySelector(".intro").style.color = "#fff";
  document.querySelector(".salute").style.color = "#fff";
});
