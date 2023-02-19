const header = document.querySelector("header");
const h1 = document.querySelector("header > h1");
const active = document.querySelector(".active");
const headerLogo2 = document.querySelector(".headerLogo_2");
const headerHeight = header.getBoundingClientRect().height;

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    header.setAttribute(
      "style",
      "height: 10vh; box-shadow: 13.7px 0px 27.9px rgba(0, 0, 0, 0),21.4px 0px 93.6px rgba(0, 0, 0, 0.01),22px 0px 419px rgba(0, 0, 0, 0.1);"
    );
    h1.setAttribute("style", "display: none;");
    // headerLogo2.setAttribute("style", "display: block;");
    headerLogo2.classList.add("active");
  } else {
    header.setAttribute("style", "height: 22.1vh;");
    h1.setAttribute("style", "display: block;");
  }
});

// 스크롤 이벤트
let prevScroll = scrollY;
console.log("prevScroll:", prevScroll);

const scrolled = () => {
  let currentScroll = scrollY;
  console.log("currentScroll:", currentScroll);

  const headerHt = header.offsetHeight;
  console.log(headerHt);

  prevScroll < currentScroll ? posTop(headerHt) : posTop(0);

  prevScroll = currentScroll;
  console.log("함수내 prevScroll:", prevScroll);
};

function posTop(top) {
  header.style.top = `-${top}px`;
}

addEventListener("scroll", scrolled);
