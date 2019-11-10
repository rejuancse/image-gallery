$(document).ready( function() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var photoContent = $('.photo-content').length;

    
    $('.photo-content').each(function(index) {

        contentIndex = index;

        index       = index + 1;
        flatID      = 'image' + index;
        idBox       = 'image' + index + '_box';
        idImg       = 'image' + index + '_image';
        idImgHash   = '#' + idImg;
        flatHash    = '#' + flatID;

        imgSrc      = document.getElementById(flatID).src;
        description = document.getElementsByClassName("content")[contentIndex].innerHTML;
        
        $(".gallery").append("<div class=\"popup_box\" id=\""+idBox+"\"><div class=\"box-top\"><span class=\"center\">"+index+" of "+photoContent+"</span><a class=\"popupBoxClose\">Close</a><a class=\"popupBoxNext\">Next</a><a class=\"popupBoxPrevious\">Previous</a></div><div class=\"main-image\"><img class=\"popup_img\" id=\""+idImg+"\"><p>"+ description +"</p></div></div>");

        $(idImgHash).attr('src', imgSrc);
    });


    // Unload the Popupbox
    function unloadPopupBox() {
        $(".background").css('display', 'none');
        $('.popup_box').removeClass('active').addClass('inactive');
    };

    // Classes that fires off 'unloadPopupBox'
    $('.popupBoxClose, .popup_img, .background').click( function() {
        unloadPopupBox();
    });

    //Unload the Popupbox
    function unloadPopupBox() {
        $(".background").css('display', 'none');
        $('.popup_box').removeClass('active').addClass('inactive');
    };

    //Classes that fires off 'unloadPopupBox'
    $('.popupBoxClose, .popup_img, .background').click( function() {
        unloadPopupBox();
    });

    $('.popupBoxPrevious').click(function(){
        imgPrev()
    });

    $('.popupBoxNext').click(function(){
        imgNext()
    });

    $(document.documentElement).keyup(function (event) {
        if (event.keyCode == 39) {
            imgNext();
        }
        if (event.keyCode == 37) {
            imgPrev();
        }
    });

    // On Click 
    $('img.photo').click(function() {
        flatID      = this.id;
        flatHash    = '#'+flatID;
        imgWidth    = $(flatHash).attr('data-width');
        imgHeight   = $(flatHash).attr('data-height');
        imgID       = flatHash + '_image';
        contentID   = flatHash + '_box';
        
        $(idImg).addClass("active");
        $(".background").css('width', windowWidth).css('height', windowHeight).addClass("overlay").fadeIn("slow");
        $(contentID).addClass('active').removeClass('inactive').fadeIn('slow');
    });


    // Prev & Next buttons and keyboard
    $(document).on('swipeleft', 'img', function(){
       imgNext();
    });
    
    $(document).on('swiperight', 'img', function(){
        imgPrev();
    });
    
    function imgNext(){
        var $active = $('.popup_box.active'), $targetslide;
        if ($active.next('.popup_box').length) {
            $target = $active.next('.popup_box');
            $target.addClass('active');
            $active.removeClass('active');
        } else {
            $target = $('.popup_box:first');
            $target.addClass('active');
            $active.removeClass('active');
        }
    }
    function imgPrev(){
        var $active = $('.popup_box.active'), $targetslide;
        if ($active.prev('.popup_box').length) {
            $target = $active.prev('.popup_box');
            $target.addClass('active');
            $active.removeClass('active');
        } else {
            $target = $('.popup_box:last');
            $target.addClass('active');
            $active.removeClass('active');
        }
    }



    
})