
$(function(){
    'use strict';
    //Adujust Slider Height
    //لجعله ادد ال height بالظبط

    // Adjust Slider Height
  /* var winH   = $(Window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   =$('.navbar').innerHeight();

     $('.slider, .carousel-item').height( winH - ( upperH + navH ));   */

    // Featured Work Shuffle
    $('.featured-work ul li').on('click' , function (){
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));

        if($(this).data('class')==='all')
        {
            $('.shuffle-imgs .col-md').css('opacity' , 1);
        }else {
          $('.shuffle-imgs .col-md').css('opacity' ,'.08');
           $($(this).data('class')).parent().css('opacity' , 1);

           /*
           // To Show images that belongs to list item specify.
            $('.shuffle-imgs .col-md').hide();
            $($(this).data('class')).parent().show();
            */
        }
    });

});