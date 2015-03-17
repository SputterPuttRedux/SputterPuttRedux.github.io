$(document).ready(function(){
  var $logo = $('.navbar-logo');

  // $logo.hover(function(){
  //   console.log("you're hovering");
  //   $(this).attr('src', $(this).attr('src').replace());
  // });

  $logo.click(function(){
    location.href="http://sputterputtredux.github.io/#top";
  });
});