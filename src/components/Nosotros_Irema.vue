<template>
    <div id="irema" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }" style="overflow:hidden !important">
        <div id="scene">   
            <div data-depth="0.05" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos"/>
            </div>
            <div data-depth="0.10" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Humo2.jpg"                                      style="width:101%; opacity:0.6; position:absolute; bottom:-1%"/>
            </div>
            <div data-depth="-0.1" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/Humo3.jpg"                                      style="width:111%; opacity:0.4; position:absolute; bottom:-1%; margin-left:-3%"/>
            </div>
            <div data-depth="0.01" :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }">
                <img src="../assets/nosotros_irema.png"     :class="ClaseImagen"    style="position:absolute; bottom:-1%"/>
            </div>            
        </div>

        <div id="CV_Irema" :class="ClaseTexto">
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
                Ancho:              window.innerWidth  * 97 /100,
                Alto:               window.innerHeight * 97 /100,
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene               = document.getElementById('scene');
            var parallaxInstance    = new Parallax(scene); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Irema');
                CV.classList.toggle('fadein');
            }, 3000); 
        }
    }
</script>



<style>    
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


    #CV_Irema
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

    #CV_Irema.TextoHorizontal.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 2.25vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
    #CV_Irema.TextoVertical.fadein
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