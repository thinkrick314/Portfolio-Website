@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
/* navbar styling */
.navbar{
    position: fixed;
    width: 100%;
    padding: 30px 0;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;
}
.navbar.sticky{
    padding: 15px 0;
    background: lightblue;
}
.navbar .max-width{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.navbar .logo a{
    color: #fff;
    font-size: 35px;
    font-weight: 600;
}
.navbar .logo a span{
    color: lightblue;
    transition: all 0.3s ease;
}
.navbar.sticky .logo a span{
    color:#fff;
}
.navbar .menu li{
    list-style: none;
    display: inline-block;
}
.navbar .menu li a{
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
}
.navbar .menu li a:hover{
    color: lightblue;
}
.navbar.sticky .menu li a:hover{
    color:#fff;
}
/* menu btn styling */
.menu-btn{
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
}


/* home section styling */
.home{
    display: flex;
    background-size: cover;
    background-attachment: fixed;
    background: url("C:\\Users\\User\\Desktop\\Portfolio\\milky-way.jpg") no-repeat center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    font-family: 'Ubuntu', sans-serif;
}
.home .max-width{
    margin: auto 0 auto 40px;
}
.home .home-content .text-1{
    font-size: 27px;
}
.home .home-content .text-2{
    font-size: 75px;
    font-weight: 600;
    margin-left: -3px;
}
.home .home-content .text-3{
    font-size: 40px;
    margin: 5px 0;
}
.home .home-content .text-3 span{
    color: lightblue;
    font-weight: 500;
}
.home .home-content a{
    display: inline-block;
    background: lightblue;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid lightblue;
    transition: all 0.3s ease;
}
.home .home-content a:hover{
    color: lightblue;
    background: none;
}

/*responsive media query start*/
@media (max-width: 1104px){
    .home .max-width{
        margin-left: 0px;
    }
}

@media (max-width: 991px){
    .max-width{
        padding: 0 50px;
    }
}

@media (max-width: 947px){
    .menu-btn{
        display: block;
        z-index: 999;
    }
    .menu-btn i.active:before{
        content: "\f00d";
    }
    .navbar .menu{
        position: fixed;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 0;
        background: #111;
        text-align: center;
        padding-top: 80px;
        transition: all 0.3s ease;
    }
    .navbar .menu.active{
        left: 0;
    }
    .navbar .menu li{
        display: block;
    }
    .navbar .menu li a{
        display: inline-block;
        margin: 20px 0;
        font-size: 25px;
    }
    .home .home-content .text-2{
        font-size: 70px;
    }
    .home .home-content .text-3{
        font-size: 35px;
    }
    .home .home-content a{
        font-size: 23px;
        padding: 10px 30px;
    }
}

@media (max-width: 500px){
    .home .home-content .text-2{
        font-size: 60px;
    }
    .home .home-content .text-3{
        font-size: 27px;
    }
}
