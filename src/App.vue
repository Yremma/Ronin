<template>
    <el-container id="app">
        <el-main style="padding:0px">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>



<script>
    export default
    {   data()
        {   return {
                Ancho:  window.innerWidth  * 97 /100,
            }
        },


        methods:
        {   // FUNCION PARA CALCULAR SI SE GIRA EL CELULAR Y HACER REFRESH
            Calcular()
            {   if( (window.innerWidth*97/100)!=this.Ancho )
                {   location.reload();
                }   
            }        
        },
        
        
        beforeMount()
        {   this.Ancho  = window.innerWidth  * 97 /100;
        },


        mounted()
        {   this.Calcular();
            setInterval(this.Calcular, 300);
        }
    }
</script>



<style>
    body
    {   background-color: #000000;
    }
</style>