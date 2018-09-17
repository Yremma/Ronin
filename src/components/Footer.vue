<template>
    <div id="footer">
        <div class="Pie" :class="ClassPie">
            &copy; Ronin 浪人 2018 by <a href="http://laredmd.com" target="_blank">laredmd</a>
        </div>
    </div>
</template>


<script>
    export default 
    {   data()
        {   return {
                Ancho:              window.innerWidth  * 97 /100,
                Alto:               window.innerHeight * 100/100, 
                ClassPie:          'PieHorizontal', 
            }
        },
        
        mounted()
        {   if(this.Alto>this.Ancho)
            {   this.ClassPie      = 'PieVertical';
            }
        }
    }
</script>


<style>
    .Pie
    {   width: 96.5%;
        border: 1px solid #0f0;
        padding: 10px;
        position: fixed;
        bottom: 0px;
        text-align: right;
        z-index: 1001;
    }

    .PieHorizontal
    {   width: 96.5%;
    }
    .PieVertical
    {   width: 91%;
    }
</style>