$(document).ready(() => {
    const checkLogin = () => {
        var user_data = {
            username: $("#txt_username").val(),
            password: $("#txt_password").val()
        };

        $.ajax ({
            url: 'php/doLogin.php',
            type: 'post',
            data: user_data,
            success: function(status) {
                if (status == 1) {
                    window.location.replace("/index.php");
                }
                else if (status == -1) {
                    alert('Login failed! please recheck your username and password!');
                }
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    $("#btn_login").click(checkLogin);

    $(document).keypress((e) => {
        if(e.which == 13) {
            // If enter is pressed
            checkLogin();
        }
    });
});