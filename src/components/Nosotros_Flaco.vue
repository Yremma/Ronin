<template>
    <div id="flaco" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" align="center">
                <img src="../assets/Ladrillos.jpg" style="margin-top:-5%; margin-left:-5%; width:110%"/>
            </div>    
            <div data-depth="-0.2">
                <img src="../assets/Humo1.jpg" 
                style="margin-top:-20%; margin-left:-5%; width:110%; opacity:0.6"/>
            </div>
            <div data-depth="0.01" style="padding-top:5%">
                <img class="foto" src="../assets/nosotros_flaco.png" style="width:70%"/>
            </div>            
        </div>
        <div id="CV_Flaco">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
</template>



<script>    
    import Parallax from 'parallax-js'
    
    export default 
    {   data()
        {   return {
                Ancho:  window.innerWidth  * 98.7/100,
                Alto:   window.innerHeight * 97/100,
            }
        },
        
        mounted()
        {   var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene); 

            setTimeout(function() { 
                var CV = document.getElementById('CV_Flaco');
                CV.classList.toggle('fadein');
            }, 3000);         
        }
    }
</script>



<style>
    #CV_Flaco
    {   position: absolute;
        right: 5%;
        color: #f00;        
        font-family: 'Gamja Flower';
        font-size: 0%;
        font-weight: bold;
        text-align: center;
        background: rgba(0,0,0,0.5);
        padding: 20px;
    
        top: 90%;
        width: 50%;
        opacity: 0;
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out; 
        
        text-shadow: 0px 0px 5px rgba(255, 0, 0, 1);
    }
    #CV_Flaco.fadein
    {   top: 10%;
        font-size: 2.5em;
        opacity: 1;
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>