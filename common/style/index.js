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
const header = document.querySelector('header');
const portfolio = document.querySelector('.portfolio');
const portfolioTxt = document.querySelector('.portfolioTxt');
const TitleBoxWork = document.querySelector('.TitleBox_Work');

const textDoc = document.querySelectorAll('.text_doc');


//스크롤시 li, 밑줄 컬러 변경
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 0, scroll > 2811) {
      $(".Menu").css("color" , "#000");
      $(".text_doc").css("background-image" , "linear-gradient(#292929,#292929)");
    }
    else if(scroll > 1 && scroll < 1874) {
      $(".Menu").css("color" , "#fff");
      $(".text_doc").css("background-image" , "linear-gradient(#fff,#fff)");
      headerLogo.classList.add('on');
    }
  })
  return;
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




/* 컨텍트 scrollTo */
const symbols = document.querySelector('.material-symbols-outlined');

symbols.addEventListener('click', () => {
  
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const main = document.querySelector('main');
const contact = document.querySelector('.contact');
const publishingt = document.querySelector('.publishing');
const about = document.querySelector('.about');

const menuMain = document.querySelector('.menu_Main');
const menuWork = document.querySelector('.menu_Work');
const menuAbout = document.querySelector('.menu_About');
const menuContact = document.querySelector('.menu_Contact');


//링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
$(document).on('click','.Menu a',function(event){
var headerHeight = $('header').outerHeight();
event.preventDefault();
  $("html,body").animate({
    scrollTop : $(this.hash).offset().top
  },300)
});

var y = window.scrollY
console.log(y);
// scrollTop; 스크롤 값. 숫자로 반환
addEventListener('scroll', () => {
  console.log(document.documentElement.scrollTop)
})