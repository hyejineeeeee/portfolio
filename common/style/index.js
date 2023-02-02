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
  } else if (scroll > 2811) {
    $(".Menu").css("color", "#000");
    $(".text_doc").css("background-image", "linear-gradient(#292929,#292929)");
  } else if (scroll >= 1 && scroll >= 936 && scroll < 3745) {
    $(".Menu").css("color", "#fff");
    $(".text_doc").css("background-image", "linear-gradient(#fff,#fff)");
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
  } else if (scroll >= 5624 && scroll < 9746) {
    $("header").css("opacity", "0");
  } else if (scroll < 6558) {
    $("header").css("opacity", "1");
  }
});

// 페이지 타이틀 scroll 이벤트
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  if (scroll == 0) {
    $(".TitleBox_Pub").removeClass("fixed");
    $(".TitleBox_Package").removeClass("fixed");
    $(".TitleBox_Web").removeClass("fixed");
    $(".TitleBox_About").removeClass("fixed");
  } else if (scroll >= 1 && scroll <= 937) {
    $(".TitleBox_Pub").addClass("fixed");
    $(".TitleBox_Package").removeClass("fixed");
    $(".TitleBox_Web").removeClass("fixed");
    $(".TitleBox_About").removeClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "1");
  } else if (scroll > 938 && scroll <= 1874) {
    $(".TitleBox_Package").addClass("fixed");
    $(".TitleBox_Web").removeClass("fixed");
    $(".TitleBox_About").removeClass("fixed");
    $(".TitleBox_Pub").removeClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "1");
  } else if (scroll > 2000 && scroll < 3000) {
    $(".TitleBox_Web").addClass("fixed");
    $(".TitleBox_About").removeClass("fixed");
    $(".TitleBox_Pub").removeClass("fixed");
    $(".TitleBox_Package").addClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "1");
  } else if (scroll > 2811 && scroll <= 5622) {
    $(".TitleBox_About").addClass("fixed");
  } else if (scroll > 5623) {
    $(".TitleBox_About").removeClass("fixed");
    $(".portfolio_arrowPF").css("opacity", "0");
  }
});

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

//링크 클릭시 헤당 섹션으로 부드럽게 이동시키기(컨텍트)
$(document).on("click", ".header_Logo a", function (event) {
  var headerHeight = $("header").outerHeight();
  $("html,body").animate(
    {
      scrollTop: $(this.hash).offset(),
    },
    300
  );
});

const main = document.querySelector("main");
const contact = document.querySelector(".contact");
const publishingt = document.querySelector(".publishing");
const about = document.querySelector(".about");

const menuMain = document.querySelector(".menu_Main");
const menuWork = document.querySelector(".menu_Work");
const menuAbout = document.querySelector(".menu_About");
const menuContact = document.querySelector(".menu_Contact");

//링크 클릭시 헤당 섹션으로 부드럽게 이동시키기(헤더)
$(document).on("click", ".Menu a", function (event) {
  var headerHeight = $("header").outerHeight();
  event.preventDefault();
  $("html,body").animate(
    {
      scrollTop: $(this.hash).offset().top,
    },
    300
  );
});

//링크 클릭시 헤당 섹션으로 부드럽게 이동시키기(컨텍트)
$(document).on("click", ".contact_Menu a", function (event) {
  var headerHeight = $("header").outerHeight();
  event.preventDefault();
  $("html,body").animate(
    {
      scrollTop: $(this.hash).offset().top,
    },
    300
  );
});

// scrollTop; 스크롤 값. 숫자로 반환
addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
});
