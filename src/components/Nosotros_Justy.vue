<template>
    <div id="justy" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.2" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Fuego3.jpg"             :class="ClaseFuego"     />
            </div>
            <div data-depth="0.02" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/nosotros_ivan.png"      :class="ClaseImagen"    style="position:absolute; bottom:-1%; right:-1%"/>
            </div>            
        </div>

        <div id="CV_Justy" :class="ClaseTexto">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Justy</center>
            <hr>
            Master de Rol, Escritor de Literatura Fantástica y Masajista.<br>
            Ex Vocalista y Bajista de Estrés Matutino (tributo a bandas de Rock Nacional) y de Sólo 3 Noches 
            (tributo a bandas de Rock Internacional).<br><br>
            En Ronin desde el 26 de Junio de 2017.
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
                ClaseFuego:         'FuegoHorizontal3',
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene               = document.getElementById('scene');
            new Parallax(scene); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseFuego     = 'FuegoVertical3';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Justy');
                CV.classList.toggle('fadein');
            }, 3000); 
        }
    }
</script>



<style>
    .FuegoHorizontal3
    {   width: 121%; 
        opacity: 0.6; 
        position: absolute; 
        bottom: -10%; 
        margin-left: -10%;
    }
    .FuegoVertical3
    {   width: 310%; 
        opacity: 0.8; 
        position: absolute; 
        bottom: -10%; 
        right: -10%;
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

    #CV_Justy
    {   position: absolute;
        left: 5%;
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

    #CV_Justy.TextoHorizontal.fadein
    {   width: 40%;
        top: 10%;        
        opacity: 1;
        font-size: 2.5vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
    #CV_Justy.TextoVertical.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 3.2vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>