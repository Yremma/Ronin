<template>
    <div id="oso" style="width:100vw; height:97vh; overflow:hidden !important">
        <div id="scene_oso">   
            <div data-depth="0.05" style="width:100vw; height:100vh">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="-0.5" style="width:100vw; height:100vh">
                <img src="../assets/Fuego1.jpg"             :class="ClaseFuego"     />
            </div>
            <div data-depth="0.02" style="width:100vw; height:100vh">
                <img src="../assets/nosotros_osito.png"     :class="ClaseImagen"    style="position:absolute; bottom:-1%"/>
            </div>            
        </div>

        <div id="CV_Oso" :class="ClaseTexto">
            <center style="font-family:'Permanent Marker'; margin-bottom:20px">Oso</center>
            <hr>
            Programador, Traductor de Inglés y Youtuber.<br>
            Ex Baterista de War Machine (tributo a bandas de Death Metal).<br><br>
            En Ronin desde 2014 (Ex Multiplayer).
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
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene_oso           = document.getElementById('scene_oso');
            new Parallax(scene_oso); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseFuego     = 'FuegoVertical';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Oso');
                CV.classList.toggle('fadein');
                setInterval(function() { 
                    var CV = document.getElementById('CV_Oso');
                    CV.classList.toggle('fadein');
                }, 25000);
            }, 38000);
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
        font-family:  'Indie Flower', cursive, 'Shadows Into Light', cursive;
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

    #CV_Oso.TextoHorizontal
    {   font-size: 0%;
        top: 90%;
        opacity: 0;
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out; 
    } 
    #CV_Oso.TextoHorizontal.fadein
    {   top: 15%;        
        opacity: 1;
        font-size: 2.5vw; 
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
        font-size: 4.2vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>