<template>
    <div id="nahuel" style="width:100vw; height:97vh; overflow:hidden !important">
        <div id="scene_nahuel">   
            <div data-depth="0.05" style="width:100vw; height:100vh">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.5" style="width:100vw; height:100vh">
                <img src="../assets/Fuego2.jpg"             :class="ClaseFuego"     />
            </div>
            <div data-depth="0.02" style="width:100vw; height:100vh">
                <img src="../assets/nosotros_nahuel.png"     :class="ClaseImagen"    style="position:absolute; bottom:-1%; right:2%"/>
            </div>            
        </div>

        <div id="CV_Nahuel" :class="ClaseTexto">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Nahuel</center>
            <hr>
            Historiador y Cantante desde los 11 años.<br>
            Ex Vocalista de Estrés Matutino (tributo a bandas de Rock Nacional).<br><br>
            En Ronin desde el 26 de Junio de 2017.
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
                ClaseFuego:         'FuegoHorizontal',
                ClaseImagen:        'ImagenHorizontalG',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene_nahuel        = document.getElementById('scene_nahuel');
            new Parallax(scene_nahuel); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseFuego     = 'FuegoVertical2';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Nahuel');
                CV.classList.toggle('fadein');
            }, 2000); 
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
    .FuegoVertical2
    {   width: 300%; 
        opacity: 0.8; 
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

    #CV_Nahuel
    {   position: absolute;
        left: 5%;
        font-family: 'Indie Flower', cursive, 'Shadows Into Light', cursive;
        font-size: 0%;
        font-weight: bold;
        text-align: justify;
        background: rgba(0,0,0,0.75);
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

    #CV_Nahuel.TextoHorizontal.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 2.5vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
    #CV_Nahuel.TextoVertical.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 4.5vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>