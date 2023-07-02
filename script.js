const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  console.log("click");
  if (navbar.classList.contains("show-navbar")) {
    navbar.classList.remove("show-navbar");
    return;
  }
  navbar.classList.add("show-navbar");
});
