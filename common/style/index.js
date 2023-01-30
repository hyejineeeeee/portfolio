//휠 블락화 (한 페이지씩만 보이게 하는 것)
// window.addEventListener("wheel", function(e){
// 	e.preventDefault();
// },{passive : false});

// var $html = $("html");
// var page = 1;
// var lastPage = $(".page").length;

// $html.animate({scrollTop:0},10);

// $(window).on("wheel", function(e){
 
// 	if($html.is(":animated")) return;
 
// 	if(e.originalEvent.deltaY > 0){
// 		if(page== lastPage) return;
 
// 		page++;
// 	}else if(e.originalEvent.deltaY < 0){
// 		if(page == 1) return;
 
// 		page--;
// 	}
// 	var posTop = (page-1) * $(window).height();
 
// 	$html.animate({scrollTop : posTop});
 
// });
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