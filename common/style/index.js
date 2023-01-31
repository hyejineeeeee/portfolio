//휠 블락화 (한 페이지씩만 보이게 하는 것)
window.addEventListener(
  'wheel',
  function (e) {
    e.preventDefault();
  },
  { passive: false }
);
let mHtml = $('html');
let page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on('wheel', function (e) {
  if (mHtml.is(':animated')) return;
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

const headerLogo2 = document.querySelector('.header_Logo2');
const headerLogo = document.querySelector('.header_Logo');
const header = document.querySelector('.header');
const portfolio = document.querySelector('.portfolio');
const portfolioTxt = document.querySelector('.portfolioTxt');
const TitleBoxWork = document.querySelector('.TitleBox_Work');


//스크롤시 li 컬러 변경
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0.8) {
      $(".Menu").css("color" , "#fff");
      headerLogo.classList.add('on');
    }
    else if(scrollY <= 937) {
      $(".Menu").css("color" , "#000");
    } 
    else if(scrollY == 0) {
      $(".Menu").css("color" , "#000");
    }
  })
})




//스크롤시 헤더 로고 변경
let portfolioOffsetTop = portfolio.offsetTop;
let clientHt = document.documentElement.clientHeight;
console.log(portfolioOffsetTop);
console.log(clientHt);
console.log(portfolio.clientHeight);

let result = clientHt;
addEventListener('scroll', () => {
  if (scrollY > 0.8) {// 배너 보임
    headerLogo2.classList.add('on')
    headerLogo.classList.add('remove')
    TitleBoxWork.classList.add('fixed');
  } else if (scrollY < 937) {// 배너 숨김
    headerLogo2.classList.remove('on')
    headerLogo.classList.remove('remove')
  }
});
console.log(scrollY);