const header = document.querySelector("header");
const h1 = document.querySelector("header > h1");
const active = document.querySelector(".active");
const headerLogo2 = document.querySelector(".headerLogo_2");
const headerHeight = header.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    header.setAttribute("style", "height: 10.5vh;");
    h1.setAttribute("style", "display: none;");
    //   headerLogo2.setAttribute("style", "display: block;");
    headerLogo2.classList.add("active");
  } else {
    header.setAttribute("style", "height: 22.1vh;");
    h1.setAttribute("style", "display: block;");
  }
});
