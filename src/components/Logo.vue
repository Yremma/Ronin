<template>
    <div id="logo">
        <div id="scene">                        
            <div data-depth="1">
                <img src="../assets/fondo1.png" style="margin-left:-15%; margin-top:-15%; width:140%; opacity:0.75"/>
            </div>             
            <div data-depth="-0.75">
                <img src="../assets/fondo3.png" style="margin-left:-15%; margin-top:-15%; width:250%; opacity:0.15"/>
            </div>
            <div data-depth="0.5" align="center">
                <img src="../assets/fondo2.png" style="margin-left:20%; width:100%; opacity:0.6"/>
            </div>
            <div data-depth="-0.25" align="center">
                <img src="../assets/Logo.png" style="padding-top:5%; width:70%"/>
            </div>
        </div>
    </div>
</template>



<script>    
    import Parallax from 'parallax-js'
    
    export default 
    {   mounted()
        {   var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        }
    }
</script>



<style>
    #logo 
    {   background-image: url('../assets/Pizarron.png');
        background-size: contain;
        background-position: center;
        overflow: hidden;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
</style>