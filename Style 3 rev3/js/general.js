// Hide Header on on scroll down
const scrollToTrigger = 25;
const navigationBarHeight = $('#navigation_bar').outerHeight();

var lastTriggered = $(this).scrollTop();
var lowestScroll = $(this).scrollTop();
var highestScroll = $(this).scrollTop();
var isVisible = true;
var isOnProgress = false;

function changeNavigationBarVisibility(isVisible) {
        if (!isVisible){
            // Scroll Down
            $('#navigation_bar').fadeTo(500, 0);
            $('#navigation_bar').css('pointer-events', 'none');
        } else {
            // Scroll Up
            $('#navigation_bar').css('pointer-events', '');
            $('#navigation_bar').fadeTo(500, 1);
        }
}

$(document).ready(function() {
    $(window).scroll(function(event){
        // console.log("current = " + $(this).scrollTop());
        // console.log("nav_bar height = " + navigationBarHeight);
        // console.log("last trigger = " + lastTriggered);
        // console.log("highest scroll = " + highestScroll);
        // console.log("isVisible = " + isVisible);
        // console.log('==========================');

        if ($(this).scrollTop() > highestScroll) {
            highestScroll = $(this).scrollTop();
        }
        if ($(this).scrollTop() < lowestScroll) {
            lowestScroll = $(this).scrollTop();
        }

        if ($(this).scrollTop() == 0) {
            $('#navigation_bar').css({position:'relative'});
            $('#image_header').css({marginTop:0});
            lastTriggered = $(this).scrollTop();
            lowestScroll = $(this).scrollTop();
            highestScroll = $(this).scrollTop();
            isVisible = true;
            isOnProgress = false;
            $('#navigation_bar').css('pointer-events', '');
            $('#navigation_bar').fadeTo(500, 1);
        }
        else {
            if (!isOnProgress) {
                isOnProgress = true;
                $('#navigation_bar').css({position:'fixed'});
                $('#image_header').css({marginTop:navigationBarHeight});
                if ($(this).scrollTop() - lowestScroll >= scrollToTrigger  && isVisible) {
                    // console.log('Hiding');
                    // console.log('==========================');
                    changeNavigationBarVisibility(false);
                    lastTriggered = $(this).scrollTop();
                    highestScroll = lowestScroll = lastTriggered;
                    isVisible = false;
                }
                if (highestScroll - $(this).scrollTop() >= scrollToTrigger && !isVisible) {
                    // console.log('Showing');
                    // console.log('==========================');
                    changeNavigationBarVisibility(true);
                    lastTriggered = $(this).scrollTop();
                    highestScroll = lowestScroll = lastTriggered;
                    isVisible = true;
                }
                setTimeout(function(){
                    isOnProgress = false;
                }, 500);
            }
        }
    });

    $('#image_header').css({marginTop:navigationBarHeight});
});