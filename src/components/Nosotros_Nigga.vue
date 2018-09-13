<template>
    <div id="nigga" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.2" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Humo4.jpg"             :class="ClaseHumo"       />
            </div>
            <div data-depth="0.02" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/nosotros_nigga.png"     :class="ClaseImagen"    style="position:absolute; bottom:-5%; right:-1%"/>
            </div>            
        </div>

        <div id="CV_Nigga" :class="ClaseTexto">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Nigga</center>
            <hr>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.<br><br>
            En Ronin desde el 13 de Abril de 2013.
        </div>
    </div>
</template>



<script>    
    import Parallax from 'parallax-js'
    

    export default 
    {   data()
        {   return {
                Ancho:              window.innerWidth  * 97 /100,
                Alto:               window.innerHeight * 97 /100,
                ClaseHumo:          'HumoHorizontal4',
                ClaseImagen:        'ImagenHorizontalG',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene               = document.getElementById('scene');
            new Parallax(scene); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseHumo      = 'HumoVertical4';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Nigga');
                CV.classList.toggle('fadein');
            }, 3000); 
        }
    }
</script>



<style>
    .HumoHorizontal4
    {   width: 131%; 
        opacity: 0.6; 
        position: absolute; 
        bottom: -10%; 
        margin-left: -10%;
    }
    .HumoVertical4
    {   width: 350%; 
        opacity: 0.6; 
        position: absolute; 
        bottom: -10%; 
        margin-left: -10%;
    }

    .ImagenHorizontalG
    {   width: 80%;
    }
    .ImagenVertical
    {   width: 140%;
    }

    .LadrillosHorizontal
    {   width: 100%;
    }
    .LadrillosVertical
    {   width: 150%;
    }

    #CV_Nigga
    {   position: absolute;
        left: 5%;
        font-family: 'Gamja Flower';
        font-size: 0%;
        font-weight: bold;
        text-align: justify;
        background: rgba(0,0,0,0.5);
        padding: 20px;

        color: #f00;
        text-shadow: 0px 0px 5px rgba(255, 0, 0, 1);
    
        top: 90%;
        opacity: 0;
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out; 
    }

    .TextoHorizontal
    {   width: 50%;
    }
    .TextoVertical
    {   width: 80%;
    }

    #CV_Nigga.TextoHorizontal.fadein
    {   width: 40%;
        top: 5%;        
        opacity: 1;
        font-size: 2vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
    #CV_Nigga.TextoVertical.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 3.8vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>