
  // scrollTop; 스크롤 값. 숫자로 반환
addEventListener("scroll", () => {
    console.log(document.documentElement.scrollTop);
  });

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
