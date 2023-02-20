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

// product 스크롤 이미지 나타나기
$(window).on("load", function () {
  function fade() {
    let animation_height = $(window).innerHeight() * 0.5;
    let ratio = Math.round((1 / animation_height) * 15000) / 10000;
    $(".fade").each(function () {
      let objectTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).innerHeight();
      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height) {
          $(this).css({
            transition: "opacity 0.1s linear",
            transition: "left 0.1s linear",
            opacity: 1,
            left: "0px",
          });
        } else {
          $(this).css({
            transition: "opacity 0.5s linear",
            opacity: (windowBottom - objectTop) * ratio,
            transition: "left 0.5s linear",
            left: `${200 * (1 - (windowBottom - objectTop) * ratio)}px`,
          });
        }
      } else {
        $(this).css({
          opacity: 0,
          left: "200px",
        });
      }
    });
  }
  $(".fade").css({
    opacity: 0,
    left: "200px",
  });
  fade();

  $(window).scroll(function () {
    fade();
  });
});

$(window).on("load", function () {
  function fade_right() {
    let animation_height2 = $(window).innerHeight() * 0.5;
    let ratio2 = Math.round((1 / animation_height2) * 15000) / 10000;
    $(".fade_right").each(function () {
      let objectTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).innerHeight();
      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height2) {
          $(this).css({
            transition: "opacity 0.1s linear",
            transition: "right 0.1s linear",
            opacity: 1,
            right: "0px",
          });
        } else {
          $(this).css({
            transition: "opacity 0.5s linear",
            opacity: (windowBottom - objectTop) * ratio2,
            transition: "right 0.5s linear",
            right: `${200 * (1 - (windowBottom - objectTop) * ratio2)}px`,
          });
        }
      } else {
        $(this).css({
          opacity: 0,
          right: "200px",
        });
      }
    });
  }
  $(".fade_right").css({
    opacity: 0,
    right: "200px",
  });
  fade_right();

  $(window).scroll(function () {
    fade_right();
  });
});

// mdPICKTitle
$(window).on("load", function () {
  function title_right() {
    let animation_height3 = $(window).innerHeight() * 0.8;
    let ratio3 = Math.round((1 / animation_height3) * 10) / 10000;
    $(".title_right").each(function () {
      let objectTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).innerHeight();
      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height3) {
          $(this).css({
            // transition: "opacity 0.3s linear",
            transition: "right 0.5s linear",
            opacity: 1,
            right: "300px",
          });
        } else {
          $(this).css({
            // transition: "opacity 0.5s linear",
            // opacity: (windowBottom - objectTop) * ratio3,
            transition: "right 0.5s linear",
            right: `${300 * (1 - (windowBottom - objectTop) * ratio3)}px`,
          });
        }
      } else {
        $(this).css({
          // opacity: 0,
          right: "0",
        });
      }
    });
  }
  $(".title_right").css({
    // opacity: 0,
    right: "0",
  });
  title_right();

  $(window).scroll(function () {
    title_right();
  });
});

$(window).on("load", function () {
  function title_left() {
    let animation_height4 = $(window).innerHeight() * 0.8;
    let ratio4 = Math.round((1 / animation_height4) * 10) / 10000;
    $(".title_left").each(function () {
      let objectTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).innerHeight();
      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height4) {
          $(this).css({
            // transition: "opacity 0.3s linear",
            transition: "left 0.5s linear",
            opacity: 1,
            left: "200px",
          });
        } else {
          $(this).css({
            // transition: "opacity 0.5s linear",
            // opacity: (windowBottom - objectTop) * ratio4,
            transition: "left 0.5s linear",
            left: `${200 * (1 - (windowBottom - objectTop) * ratio4)}px`,
          });
        }
      } else {
        $(this).css({
          // opacity: 0,
          left: "0",
        });
      }
    });
  }
  $(".title_left").css({
    // opacity: 0,
    left: "0",
  });
  title_left();

  $(window).scroll(function () {
    title_left();
  });
});

$(window).on("load", function () {
  function title_top() {
    let animation_height5 = $(window).innerHeight() * 0.8;
    let ratio5 = Math.round((1 / animation_height5) * 10) / 10000;
    $(".title_top").each(function () {
      let objectTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).innerHeight();
      if (objectTop < windowBottom) {
        if (objectTop < windowBottom - animation_height5) {
          $(this).css({
            // transition: "opacity 0.3s linear",
            transition: "top 0.5s linear",
            opacity: 1,
            top: "500px",
          });
        } else {
          $(this).css({
            // transition: "opacity 0.5s linear",
            // opacity: (windowBottom - objectTop) * ratio4,
            transition: "top 0.5s linear",
            top: `${500 * (1 - (windowBottom - objectTop) * ratio5)}px`,
          });
        }
      } else {
        $(this).css({
          // opacity: 0,
          top: "0",
        });
      }
    });
  }
  $(".title_top").css({
    // opacity: 0,
    top: "0",
  });
  title_top();

  $(window).scroll(function () {
    title_top();
  });
});

// instagram_Box
window.onscroll = () => {
  const parentDiv = document.querySelector(".instagram_Box");
  const viewportHeight = window.innerHeight;
  const fromViewportToParentHeight = parentDiv.getBoundingClientRect().top;
  const 스크롤이넘어간정도 = viewportHeight - fromViewportToParentHeight;

  let divHeight =
    parentDiv.clientHeight > viewportHeight
      ? viewportHeight
      : parentDiv.clientHeight;
  let scrollRate = (스크롤이넘어간정도 / divHeight) * 100;
  if ((스크롤이넘어간정도 / divHeight) * 100 < 0) {
    scrollRate = 0;
  } else if ((스크롤이넘어간정도 / divHeight) * 100 > 100) {
    scrollRate = 100;
  }
  //스타일 적용하는 부분
  const childDiv = document.querySelector(".instagram_Box");
  childDiv.style.transform = `scale(${scrollRate / 100})`;
};

/* review_Menu */
const Face = document.querySelector(".Face");
const All = document.querySelector(".All");
const Eye = document.querySelector(".Eye");
const Lip = document.querySelector(".Lip");

const AllBox = document.querySelector(".All_Box");
const FaceBox = document.querySelector(".Face_Box");
// const Lip_Box = document.querySelectorAll("");
// const Eye_Box = document.querySelectorAll("");

// reviewMenu 클릭시 폰트 컬러 변경
const reviewMenu = document.querySelectorAll(".reviewMenu");
function handleClick(event) {
  // div에서 모든 "click" 클래스 제거
  reviewMenu.forEach((event) => {
    event.classList.remove("click");
  });
  // 클릭한 div만 "click"클래스 추가
  event.target.classList.add("click");
}

reviewMenu.forEach((e) => {
  e.addEventListener("click", handleClick);
});

All.addEventListener("click", (e) => {
  AllBox.classList.add("active");
});
Face.addEventListener("click", (e) => {
  FaceBox.classList.add("active");
});

function handleClick(event) {
  // div에서 모든 "click" 클래스 제거
  reviewMenu.forEach((event) => {
    event.classList.remove("click");
  });
  // 클릭한 div만 "click"클래스 추가
  event.target.classList.add("click");
}
