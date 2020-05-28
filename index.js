$(document).ready(function(){

 var link =$('.menu-link');
 var link_active =$('.menu-link_active');
 var menu = $('.menu');
 var nav_menu =$('.menu a')

 link.click(function(){
  $(this).toggleClass('menu-link_active');
  menu.toggleClass('menu_active')
 });

 
nav_menu.click(function(){
    link.toggleClass('menu-link_active');
    menu.toggleClass('menu_active')
});






});