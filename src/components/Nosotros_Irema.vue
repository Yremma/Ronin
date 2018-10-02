<template>
    <div id="irema" style="width:100vw; height:97vh; overflow:hidden !important">
        <div id="scene_irema">   
            <div data-depth="0.05" style="width:100vw; height:100vh">
                <img src="../assets/Ladrillos.jpg"          :class="ClaseLadrillos" />
            </div>
            <div data-depth="0.10" style="width:100vw; height:100vht">
                <img src="../assets/Humo2.jpg"              :class="ClaseHumo"      />
            </div>
            <div data-depth="-0.1" style="width:100vw; height:100vh">
                <img src="../assets/Humo3.jpg"              :class="ClaseHumo"      />
            </div>
            <div data-depth="0.01" style="width:100vw; height:100vh">
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
                Ancho:              window.innerWidth,
                Alto:               window.innerHeight,
                ClaseHumo:          'HumoHorizontal',
                ClaseImagen:        'ImagenHorizontal',
                ClaseLadrillos:     'LadrillosHorizontal',
                ClaseTexto:         'TextoHorizontal',                
            }
        },
        

        mounted()
        {   var scene_irema         = document.getElementById('scene_irema');
            new Parallax(scene_irema); 

            if(this.Alto>this.Ancho)    
            {   this.ClaseHumo      = 'HumoVertical';
                this.ClaseImagen    = 'ImagenVertical';
                this.ClaseLadrillos = 'LadrillosVertical';
                this.ClaseTexto     = 'TextoVertical';
            }

            setTimeout(function() { 
                var CV = document.getElementById('CV_Irema');
                CV.classList.toggle('fadein');
            }, 21000); 
        }
    }
</script>



<style>    
    .HumoHorizontal
    {   width:  110%;
        margin-left: -5%; 
        opacity: 0.6; 
        margin-top: -5%;
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


    #CV_Irema
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

    #CV_Irema.TextoHorizontal.fadein
    {   top: 5%;        
        opacity: 1;
        font-size: 1.75vw; 
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
        font-size: 3.2vw; 
        transition: opacity 7s;
        -webkit-transition: all 700ms ease-in-out;
        -moz-transition: all 700ms ease-in-out;
        -o-transition: all 700ms ease-in-out;
        -ms-transition: all 700ms ease-in-out;
        transition: all 700ms ease-in-out;
    }
</style>