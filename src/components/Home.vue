<template>
    <div id="home" style="overflow:hidden">
        <div id="scene">                        
            <div data-depth="1">
                <img src="../assets/fondo1.svg" style="width:100%; opacity:0.8"/>
            </div>             
            <div data-depth="-0.75">
                <img src="../assets/fondo3.svg" style="margin-top:-15%; margin-left:-20%; width:250%; opacity:0.15"/>
            </div>
            <div data-depth="0.5" align="center">
                <img src="../assets/fondo2.svg" style="margin-left:20%; width:100%; opacity:0.6"/>
            </div>
            <div data-depth="-0.25" align="center">
                <img src="../assets/Logo.png" style="padding-top:5%; width:70%"/>
            </div>
        </div>
    </div>
</template>



<script>
    
import Parallax         from 'parallax-js'

    
    export default 
    {   mounted()
        {   var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        }
    }
</script>



<style>
    div
    {   font-weight: bold;
        font-variant: small-caps;
        color: #fff;
    }
    #home 
    {   background-image: url('../assets/Pizarron.png');
        background-size: contain;
        background-position: center;
    }
</style>