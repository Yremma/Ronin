<template>
    <div id="oso" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.5" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Fuego1.jpg"             :class="ClaseFuego"     />
            </div>
            <div data-depth="0.02" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/nosotros_osito.png"     :class="ClaseImagen"    style="position:absolute; bottom:-1%"/>
            </div>            
        </div>

        <div id="CV_Oso" :class="ClaseTexto">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Oso</center>
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
                ClaseFuego:         'FuegoHorizontal',
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene               = document.getElementById('scene');
            var parallaxInstance    = new Parallax(scene); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseFuego     = 'FuegoVertical';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Oso');
                CV.classList.toggle('fadein');
            }, 3000); 
        }
    }
</script>



<style>
    .FuegoHorizontal
    {   width: 121%; 
        opacity: 0.8; 
        position: absolute; 
        bottom: -10%; 
        margin-left: -10%;
    }
    .FuegoVertical
    {   width: 190%; 
        opacity: 0.8; 
        position: absolute; 
        bottom: -10%; 
        margin-left: -10%;
    }

    .ImagenHorizontal
    {   width: 70%;
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

    #CV_Oso
    {   position: absolute;
        right: 5%;
        font-family: 'Gamja Flower';
        font-size: 0%;
        font-weight: bold;
        text-align: justify;
        background: rgba(0,0,0,0.5);
        padding: 20px;

        color: #fff;
        text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
    
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

    #CV_Oso.TextoHorizontal.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 2vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
    #CV_Oso.TextoVertical.fadein
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