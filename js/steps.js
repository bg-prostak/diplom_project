const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let siblings = button.parentNode.querySelectorAll("button");
    siblings.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});
$(document).ready(function(){
    $('.1').click(function(event){
        $('.1-1, .1').addClass('active');
        $('.1-2, .1-3, .1-4, .1-5,  .2, .3, .4, .5').removeClass('active');
    });
    $('.2').click(function(event){
        $('.1-2, .2').addClass('active');
        $('.1-1, .1-3, .1-4, .1-5,  .1, .3, .4, .5').removeClass('active');
    });
    $('.3').click(function(event){
        $('.1-3, .3').addClass('active');
        $('.1-2, .1-1, .1-4, .1-5,  .2, .1, .4, .5').removeClass('active');
    });
    $('.4').click(function(event){
        $('.1-4, .4').addClass('active');
        $('.1-2, .1-3, .1-1, .1-5,  .2, .3, .1, .5').removeClass('active');
    });
    $('.5').click(function(event){
        $('.1-5, .5').addClass('active');
        $('.1-2, .1-3, .1-4, .1-1,  .2, .3, .4, .1').removeClass('active');
    });
});