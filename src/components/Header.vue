<template>
    <div id="header">
        <div class="Menu" :class="ClassMenu">
            Inicio<br>
        </div>
    </div>
</template>


<script>
    export default 
    {   data()
        {   return {
                Ancho:              window.innerWidth  * 97 /100,
                Alto:               window.innerHeight * 100/100, 
                ClassMenu:          'MenuHorizontal', 
            }
        },
        
        mounted()
        {   if(this.Alto>this.Ancho)
            {   this.ClassMenu      = 'MenuVertical';
            }
        }
    }
</script>


<style>
    .Menu
    {   border: 1px solid #f00;
        width: 96.5%;
        padding: 10px;
        position: fixed;
        top: 0;
        z-index: 1000;
    }

    .MenuHorizontal
    {   width: 96.5%;
    }
    .MenuVertical
    {   width: 91%;
    }
</style>