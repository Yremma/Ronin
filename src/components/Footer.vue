<template>
    <div id="footer">
        <el-row>

            <!-- Columna Vacia -->
            <el-col :span="8" class="hidden-xs">&nbsp;</el-col>

            <!-- Redes Sociales -->
            <el-col :xs="12" :sm="8" align="center">
                <a href="http://www.facebook.com/RoninTuc" target="_blank">
                    <img class="BtnSocial" :src="Facebook"/>
                </a>
                <a href="http://www.instagram.com/grupo.ronin" target="_blank">
                    <img class="BtnSocial" :src="Instagram"/>
                </a>
                <a href="http://wa.me/5493815980295" target="_blank">
                    <img class="BtnSocial" :src="Whatsapp"/>
                </a>
            </el-col>

            <!-- Copyright -->
            <el-col :xs="12" :sm="8" align="right">
                <br>
                <small><i>&copy; Ronin 浪人 2018 by <a class="BtnLaRedMD" href="http://www.laredmd.com">laredmd</a></i></small>&nbsp;
                <br>
                <br>
            </el-col>

        </el-row>
    </div>
</template>


<script>
    export default {
        name: 'Footer',

        data()
        {   return { 
                Facebook:       'img/RedesFacebook.png',
                Instagram:      'img/RedesInstagram.png',
                Twitter:        'img/RedesTwitter.png',
                Whatsapp:       'img/RedesWhatsapp.png',
            };
        },
    }
</script>


<style>
    #footer
    {   background: #000;
        color: #fff;
        width: 100%;
        max-height: 60px;
        position: fixed;
        bottom: 0px;
        z-index: 1001;
    }

    .BtnSocial
    {   width: 40px;
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        border-radius: 30px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .BtnSocial:hover
    {   -webkit-box-shadow: 0px 3px 10px 0px rgba(255, 0, 0, 1);
        -moz-box-shadow:    0px 3px 10px 0px rgba(255, 0, 0, 1);
        box-shadow:         0px 3px 10px 0px rgba(255, 0, 0, 1); 
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;  
    }

    .BtnLaRedMD, .BtnLaRedMD:visited
    {   text-decoration: none;
        color: #F00;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    .BtnLaRedMD:hover, .BtnLaRedMD:focus
    {   color: #00ADAD;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
</style>