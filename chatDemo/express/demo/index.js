/**
 * Created by Echo on 2015/11/25.
 */

$(function(){
   $(".nav-list-item").click(function(){
       var $this = $(this),
           index = $(this).index();
       $(".nav-list-item").removeClass("curr").eq(index).addClass("curr");
       $(".container .section").removeClass("curr").eq(index).addClass("curr");
   })
});