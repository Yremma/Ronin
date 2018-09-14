<template>
    <div id="classroom">

        <div id="divAntes"   :class="ClaseAntes"    :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }"></div>

        <div id="divDespues" :class="ClaseDespues"  :style="{ 'height': Alto + 'px', 'width': Ancho + 'px' }"></div>

    </div>
</template>



<script>
    export default 
    {   data()
        {   return {
                Ancho:              window.innerWidth  * 97 /100,
                Alto:               window.innerHeight * 100 /100, 
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
</style>