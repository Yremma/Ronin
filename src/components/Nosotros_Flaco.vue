<template>
    <div id="flaco" style="width:100vw; height:97vh; overflow:hidden !important">
        <div id="scene_flaco">   
            <div data-depth="0.05" style="width:100vw; height:100vh">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.2" style="width:100vw; height:100vh">
                <img src="../assets/Humo1.jpg"              :class="ClaseHumo"      />
            </div>
            <div data-depth="0.01" style="width:100vw; height:100vh">
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
                Ancho:              window.innerWidth,
                Alto:               window.innerHeight,
                ClaseHumo:          'HumoHorizontal',
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene_flaco         = document.getElementById('scene_flaco');
            new Parallax(scene_flaco); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseHumo      = 'HumoVertical';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Flaco');
                CV.classList.toggle('fadein');
            }, 6000); 
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
        font-family:  'Indie Flower', cursive, 'Shadows Into Light', cursive;
        font-size: 0%;
        font-weight: bold;
        text-align: justify;
        background: rgba(0,0,0,0.75);
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
        font-size: 2.5vw; 
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
        font-size: 4.4vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>