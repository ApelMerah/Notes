// Hide Header on on scroll down
const scrollToTrigger = 25;
const navigationBarHeight = $('#navigation_bar').outerHeight();
const pageContent = $('#page_content');

var lastTriggered = $(this).scrollTop();
var lowestScroll = $(this).scrollTop();
var highestScroll = $(this).scrollTop();
var isVisible = true;
var isOnProgress = false;

const changeNavigationBarVisibility = (isVisible) => {
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

const logout = () => {
    $.ajax ({
        url: 'php/doLogout.php',
        type: 'post',
        success: function() {
            window.location.replace(`/Style 3 rev3 cont/index.php`);
        },
        error: function(error) {
            console.log(error);
        }
    });
}

const insertHeader = () => {
    $.ajax ({
        url: 'php/insertNavigationBar.php',
        type: 'post',
        success: function(status) {
            // console.log(`Insert header: ${status}`);
            if (status == 1) {
                $('#navigation_items').append(`
                    <a href="edit_home.php"><span class="navigation_item">HOME</span></a>
                    <a href="edit_portofolio.php"><span class="navigation_item">PORTOFOLIO</span></a>
                    <a href="edit_services.php"><span class="navigation_item">SERVICES</span></a>
                    <a href="edit_nurseries.php"><span class="navigation_item">NURSERIES</span></a>
                    <a href="edit_about_us.php"><span class="navigation_item">ABOUT US</span></a>
                    <a onclick="logout();"><span class="navigation_item">LOG OUT</span></a>
                `);
            }
            else {
                $('#navigation_items').append(`
                    <a href="index.php"><span class="navigation_item">HOME</span></a>
                    <a href="portofolio.php"><span class="navigation_item">PORTOFOLIO</span></a>
                    <a href="services.php"><span class="navigation_item">SERVICES</span></a>
                    <a href="nurseries.php"><span class="navigation_item">NURSERIES</span></a>
                    <a href="about_us.php"><span class="navigation_item">ABOUT US</span></a>
                `);
            }
        },
        error: function(error) {
            console.log(error);
        }
    });
}

$(document).ready(() => {
    // Beautiful Scroll
    $(window).scroll((event) => {
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
                    changeNavigationBarVisibility(false);
                    lastTriggered = $(this).scrollTop();
                    highestScroll = lowestScroll = lastTriggered;
                    isVisible = false;
                }
                if (highestScroll - $(this).scrollTop() >= scrollToTrigger && !isVisible) {
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

    // Insert Header
    insertHeader();
});