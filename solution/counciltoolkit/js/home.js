var main = function (toDoObjects) {
    "use strict";

    $(".features li").eq(0).click(function(){
      window.location.href="cloudCategory.html";
    });

    $(".features li").eq(1).click(function(){
      window.location.href="almCategory.html";
    });

    $(".features li").eq(2).click(function(){
      window.location.href="industryCategory.html";
    });

}


$(document).ready(main);
