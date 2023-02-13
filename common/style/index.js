$('a[href="#"]').click(function (e) {
  e.preventDefault();
});

//휠 블락화 (한 페이지씩만 보이게 하는 것)
window.addEventListener(
  "wheel",
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
let mHtml = $("html");
let page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function (e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
    if (page == 13) return;
    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page == 1) return;
    page--;
  }
  let posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });
});

const portfolio = document.querySelector(".portfolio");
const portfolioTxt = document.querySelector(".portfolioTxt");
const TitleBoxWork = document.querySelector(".TitleBox_Work");
const textDoc = document.querySelectorAll(".text_doc");
const headerLogo2 = document.querySelector(".header_Logo2");
const headerLogo = document.querySelector(".header_Logo");
const header = document.querySelector("header");

//스크롤시 li, 밑줄 컬러 변경
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll == 0) {
    $(".Menu").css("color", "#000");
    $(".text_doc").css("background-image", "linear-gradient(#292929,#292929)");
  } else if (scroll >= 1 && scroll < 3241) {
    $(".Menu").css("color", "#fff");
    $(".text_doc").css("background-image", "linear-gradient(#fff,#fff)");
  } else if (scroll > 3240 && scroll <= 6480) {
    $(".Menu").css("color", "#000");
    $(".text_doc").css("background-image", "linear-gradient(#292929,#292929)");
  }
});

// 페이지별 헤더 로고
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll == 0) {
    $(".header_Logo").removeClass("remove");
    $(".header_Logo2").removeClass("on");
    $("header").css("opacity", "1");
  } else if (scroll > 0 && scroll < 937) {
    $(".header_Logo").addClass("remove");
    $(".header_Logo2").addClass("on");
  } else if (scroll >= 6481 && scroll < 9746) {
    $("header").css("opacity", "0");
  } else if (scroll < 6558) {
    $("header").css("opacity", "1");
  }
});

// 페이지 타이틀 scroll 이벤트
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll == 0) {
    $(
      ".TitleBox_Pub, .TitleBox_Package, .TitleBox_Web, .TitleBox_About"
    ).removeClass("fixed");
  } else if (scroll >= 1 && scroll <= 1080) {
    $(".TitleBox_Package, .TitleBox_Web,.TitleBox_About").removeClass("fixed");
    $(".TitleBox_Pub").addClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "1");
  } else if (scroll > 1080 && scroll <= 2160) {
    $(".TitleBox_Web, .TitleBox_About, .TitleBox_Pub").removeClass("fixed");
    $(".TitleBox_Package").addClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "1");
  } else if (scroll >= 2161 && scroll < 3240.6) {
    $(".TitleBox_About, .TitleBox_Pub").removeClass("fixed");
    $(".TitleBox_Package, .TitleBox_Web").addClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "1");
  } else if (scroll > 3247 && scroll <= 6480) {
    $(".TitleBox_About").addClass("fixed");
  } else if (scroll > 5623) {
    $(".TitleBox_About").removeClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "0");
  }
});

// 스크롤시 페이드 인업
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".page");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

/* 컨텍트 scrollTo */
const symbols = document.querySelector(".material-symbols-outlined");

symbols.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 심볼 로고 클릭시 TOP으로 이동
headerLogo2.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const main = document.querySelector("main");
const contact = document.querySelector(".contact");
const publishingt = document.querySelector(".publishing");
const about = document.querySelector(".about");

const menuMain = document.querySelector(".menu_Main");
const menuWork = document.querySelector(".menu_Work");
const menuAbout = document.querySelector(".menu_About");
const menuContact = document.querySelector(".menu_Contact");

const contactMain = document.querySelector(".contact_Main");
const contactWork = document.querySelector(".contact_Work");
const contactAbout = document.querySelector(".contact_About");

// //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기(헤더)
// $(document).on("click", ".Menu a", function (event) {
//   var headerHeight = $("header").outerHeight();
//   event.preventDefault();
//   $("html,body").animate(
//     {
//       scrollTop: $(this.hash).offset().top,
//     },
//     300
//   );
// });

// 컨텍트 메뉴 클릭시 해당 섹션으로 부드럽게 이동
contactMain.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = main.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

contactWork.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = publishingt.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

contactAbout.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = about.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

// 헤더 클릭시 해당 섹션으로 부드럽게 이동
menuMain.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = main.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

menuWork.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = publishingt.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

menuAbout.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = about.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

menuContact.addEventListener("click", (e) => {
  e.preventDefault();
  let ht = contact.offsetTop;

  scrollTo({
    top: ht,
    behavior: "smooth",
  });
});

//링크 클릭시 헤당 섹션으로 부드럽게 이동시키기(컨텍트)
// $(document).on("click", ".contact_Menu a", function (event) {
//   var headerHeight = $("header").outerHeight();
//   event.preventDefault();
//   $("html,body").animate(
//     {
//       scrollTop: $(this.hash).offset().top,
//     },
//     300
//   );
// });

// scrollTop; 스크롤 값. 숫자로 반환
addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
});
