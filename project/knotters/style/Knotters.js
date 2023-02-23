const header = document.querySelector("header");

//스크롤시 li, 밑줄 컬러 변경
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 999 && scroll < 2949) {
      $(".Menu").css("color", "#000");
      $(".text_doc").css("background-image", "linear-gradient(#292929,#292929)");
    } else if (scroll > 0) {
      $(".Menu").css("color", "#fff");
      $(".text_doc").css("background-image", "linear-gradient(#fff,#fff)");
    } 
  });


  // scrollTop; 스크롤 값. 숫자로 반환
/* addEventListener("scroll", () => {
    console.log(document.documentElement.scrollTop);
  });

  // 스크롤 이벤트
window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      header.setAttribute(
        "style",
        "height: 14vh; background:#fff; box-shadow: 13.7px 0px 27.9px rgba(0, 0, 0, 0),21.4px 0px 93.6px rgba(0, 0, 0, 0.01),22px 0px 419px rgba(0, 0, 0, 0.1);"
      );
    } else {
      header.setAttribute("style", "background:  transparent;");
    }
  }); */
