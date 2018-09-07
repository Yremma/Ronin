<template>
    <div id="irema" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" align="center">
                <img src="../assets/Ladrillos.jpg" style="margin-top:-5%; margin-left:-5%; width:110%"/>
            </div>
            <div data-depth="0.1">
                <img src="../assets/Humo2.jpg" 
                style="margin-top:-20%; margin-left:-15%; width:120%; opacity:0.6"/>
            </div>
            <div data-depth="-0.1">
                <img src="../assets/Humo3.jpg" 
                style="margin-top:-25%; margin-left:-5%; width:110%; opacity:0.4"/>
            </div>
            <div data-depth="0.01" style="padding-top:5%">
                <img class="foto" src="../assets/nosotros_irema.png" style="width:70%"/>
            </div>            
        </div>
        <div id="CV_Irema">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Yremma</center>
            <hr>
            Historietista, Ilustradora, Desarrolladora de Software y Soprano Lírica.<br>
            Ex tecladista de Helden (tributo a Rammstein) y de Concordia (Metal Progresivo).<br>
            Ex vocalista de Fenix (tributo a bandas de Hardrock) y de Atenea (Metal Sinfónico).<br>
            Tecladista en Regular Juan (tributo a Queens of the Stone Age).<br><br>
            En Ronin desde el 26 de Junio de 2017.
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
                var CV = document.getElementById('CV_Irema');
                CV.classList.toggle('fadein');
            }, 3000);         
        }
    }
</script>



<style>
    #CV_Irema
    {   position: absolute;
        right: 5%;
        color: #f00;        
        font-family: 'Gamja Flower';
        font-size: 0%;
        font-weight: bold;
        text-align: justify;
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
    #CV_Irema.fadein
    {   top: 10%;
        font-size: 2.1em;
        opacity: 1;
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>