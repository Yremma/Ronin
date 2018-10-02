<template>
    <div id="logo" style="height:100vh; z-index:100">
        <div id="scene">                        
            <div data-depth="1"     :class="ClaseFondo1">
                <img src="../assets/fondo1.png" style="width:100%"/>
            </div> 
            <div data-depth="-0.75" :class="ClaseFondo3">
                <img src="../assets/fondo3.png" style="width:100%"/>
            </div>            
            <div data-depth="0.5"   :class="ClaseFondo2">
                <img src="../assets/fondo2.png" style="width:100%"/>
            </div>
            <div data-depth="-0.25" :class="ClaseLogo"  >
                <img src="../assets/Logo.png"   style="width:100%"/>
            </div>
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
                ClaseFondo1:        'Fondo1Horizontal',
                ClaseFondo2:        'Fondo2Horizontal',
                ClaseFondo3:        'Fondo3Horizontal',
                ClaseLogo:          'LogoHorizontal',                
            }
        },
        
        mounted()
        {   var scene = document.getElementById('scene');
            new Parallax(scene);

            if(this.Alto>this.Ancho)
            {   this.ClaseFondo1    = 'Fondo1Vertical';
                this.ClaseFondo2    = 'Fondo2Vertical';
                this.ClaseFondo3    = 'Fondo3Vertical';
                this.ClaseLogo      = 'LogoVertical'; 
            }
        }
    }
</script>



<style>
    #logo 
    {   background-image: url('../assets/Pizarron.png');
        background-size: cover;
        background-position: center;
        overflow: hidden;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }


    .Fondo1Horizontal
    {   margin-left: -15%; 
        margin-top: -12.5%;
        width: 140%; 
        opacity: 0.75;
    }
    .Fondo1Vertical
    {   margin-left: -50%; 
        margin-top: 0%;
        width: 330% !important; 
        opacity: 0.75;
    }

    .Fondo2Horizontal
    {   margin-left: 15%;
        margin-top: 15%; 
        width: 70%; 
        opacity: 0.6;
    }
    .Fondo2Vertical
    {   margin-left: -50%;
        margin-top: -15%; 
        width: 340%; 
        opacity: 0.6;
    }

    .Fondo3Horizontal
    {   margin-left: -10%; 
        margin-top: -0%; 
        width: 120%; 
        opacity: 0.15;
    }
    .Fondo3Vertical
    {   margin-left: -50%; 
        margin-top: -10%; 
        width: 330%; 
        opacity: 0.15;
    }

    .LogoHorizontal
    {   margin-left: 15%;
        margin-top: 20%;
        width: 70%;
    }
    .LogoVertical
    {   margin-left: 0%;
        margin-top: 55%;
        width: 100%;
    }
</style>