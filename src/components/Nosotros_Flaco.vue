<template>
    <div id="flaco" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.2" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Humo1.jpg"              :class="ClaseHumo"      />
            </div>
            <div data-depth="0.01" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/nosotros_flaco.png"     :class="ClaseImagen"    style="position:absolute; bottom:-1%"/>
            </div>            
        </div>

        <div id="CV_Flaco" :class="ClaseTexto">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Jota</center>
            <hr>
            Actor, Dibujante, Cocinero, Barman, Tenor Lírico.<br>
            Ex guitarrista de Shaggy (Indi Rock) y Mandala (Tributo a The Strokes).<br><br>
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
                ClaseHumo:          'HumoHorizontal',
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene               = document.getElementById('scene');
            new Parallax(scene); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseHumo      = 'HumoVertical';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Flaco');
                CV.classList.toggle('fadein');
            }, 3000); 
        }
    }
</script>



<style>
    .HumoHorizontal
    {   width:  110%;
        margin-left: -5%; 
        opacity: 0.6; 
        margin-top: -20%;
    }
    .HumoVertical
    {   width:  250%;
        margin-left: -5%; 
        opacity: 0.6; 
        margin-top: -20%;
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
    
    
    #CV_Flaco
    {   position: absolute;
        right: 5%;
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

    #CV_Flaco.TextoHorizontal.fadein
    {   top: 10%;        
        opacity: 1;
        font-size: 3vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
    #CV_Flaco.TextoVertical.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 6vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>