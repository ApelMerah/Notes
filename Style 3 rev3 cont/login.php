<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="shortcut icon" type="image/x-icon" href="img/placeholder.jpeg" />
    <style type="text/css" media="screen">

        @font-face {
            font-family: SofiaProLight;
            src: url("font/Sofia Pro Light.ttf") format("truetype");
        }
    
    </style>
    <link rel="stylesheet" href="css/general.css" />
    <link rel="stylesheet" href="css/login.css" />
</head>
<body>
    <div id="navigation_bar">
        <div id="navigation_blank"></div>
        <div id="navigation_items"></div>
    </div>
    
    <div id="all_content">
        <div id="main_content">
            <a href="index.html"><img id="image_header" src="img/placeholder.jpeg" /></a>

            <hr id="content_line">

            <div id="page_content">
                <div class="login_component">
                    <div class="prompt">Username</div>
                    <input type="text" id="txt_username" class="login_field" />
                </div>
                <div class="login_component">
                    <div class="prompt">Password</div>
                    <input type="password" id="txt_password" class="login_field" />
                </div>
                <button id="btn_login">Login</button>
            </div>
            
            <hr id="footer_line">

            <div id="client_list">
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
                <img class="image_client" src="img/placeholder.jpeg" />
            </div>

            <hr id="copyright_line">

            <div id="copyright">
                &#169; John Doe - 2018. Managed & Organized by John Doe Corporation.
            </div>
        </div>
    </div>
</body>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/general.js"></script>
<script type="text/javascript" src="js/login.js"></script>
</html>