const share = document.querySelector(".share");
const links = document.querySelectorAll(".links");

share.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.toggle("active");
  });
});
