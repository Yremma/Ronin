<template>
    <div id="classroom">

        <div class="divDivisor">
            Quiénes Somos
        </div>

        <div id="divAntes"   :class="ClaseAntes"    style="width:100vw; height:100vh"></div>

        <div id="divDespues" :class="ClaseDespues"  style="width:100vw; height:100vh"></div>

    </div>
</template>



<script>
    export default 
    {   data()
        {   return {
                Ancho:              window.innerWidth,
                Alto:               window.innerHeight, 
                ClaseAntes:         'AntesHorizontal',
                ClaseDespues:       'DespuesHorizontal',
            }
        }, 

        mounted()
        {   if(this.Alto>this.Ancho)    
            {   this.ClaseAntes      = 'AntesVertical';
                this.ClaseDespues    = 'DespuesVertical';
            }
        }  
    }
</script>



<style>
   #divAntes 
    {   background-image: url('../assets/antes.png');
        background-size: cover;
        background-attachment: fixed;
    }
    #divDespues
    {   background-image: url('../assets/despues.png');
        background-size: cover;
        background-attachment: fixed;
    }

    .AntesHorizontal, .DespuesHorizontal
    {   background-position: center;
    }    
    .AntesVertical, .DespuesVertical
    {   background-position: 10%;
    }

    .divDivisor
    {   width: 100vw; 
        background: #000; 
        color: #fff; 
        text-align: center; 
        font-weight: bold; 
        font-size: x-large; 
        padding: 10px; 
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
</style>