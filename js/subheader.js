//Nutanix Logo
const backArrow = `
<?xml version="1.0" encoding="UTF-8"?>
<svg
  class='main-back' width="6px" height="10px" viewBox="0 0 6 10" version="1.1"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <polyline
    transform="translate(-29,0)" fill="none" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" stroke="#22A5F7"
    points="34 1 30 5 34 9"></polyline>
</svg>
`


//render header
$('.subheader').append(`<div class='compress' hcd>
  <div class='back-section' hcs>
    <h2 class='page-subtitle' hc >Illustration · Motion</h2>
    <h3 class='level1' alt> Illustration </h3>
  </div>
  <div class='navlinks' hcs>
    <li class='blocks'>Blocks</li>
    <li class='product'>Product </li>
    <li class='marketing'>Marketing</li>
    <li class='video'>Video</li>
  </div>

  <div class='hamburger'><span class='patty'></span></div>
  </div>
`);



$('.subheader li').eq(0).addClass('active');

$('.subheader li').click(function(){
  $('.subheader li').removeClass('active');
  $(this).addClass('active')
});

$(window).on("load", function() {
  setTimeout(function () {
    $('.subheader').addClass('slideDown');
    $('container').addClass('slideDown');
    $('body').scrollTop(0);
  }, 600);

});
