<template>
    <el-container id="app">
        <el-main style="min-height:91vh; padding:0px">
            <Header></Header>
            <router-view></router-view>
            <Footer></Footer>
        </el-main>
    </el-container>
</template>



<script>
    import Header   from '@/components/Header'
    import Footer   from '@/components/Footer'
    
    export default
    {   components: {
            Header,
            Footer
        },
        
        
        data()
        {   return {
                Ancho:  window.innerWidth,
            }
        },


        methods:
        {   // FUNCION PARA CALCULAR SI SE GIRA EL CELULAR Y HACER REFRESH
            Calcular()
            {   if( window.innerWidth!=this.Ancho )
                {   location.reload();
                }   
            }        
        },
        
        
        beforeMount()
        {   this.Ancho  = window.innerWidth;
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
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
    }


    /** DISPLAY ********************************************************************************************************/

    @media (max-width:767px)
    {	.hidden-xs
        {	display: none !important;
        }
        .visible-xs
        {	display: block !important;
        }
        .visible-sm
        {	display: none !important;
        }
        .visible-md
        {	display: none !important;
        }
        .visible-lg
        {	display: none !important;
        }
    }

    @media (min-width:768px) and (max-width:991px)
    {	.hidden-sm
        {	display: none !important
        }
        .visible-xs
        {	display: none !important;
        }
        .visible-sm
        {	display: block !important;
        }
        .visible-md
        {	display: none !important;
        }
        .visible-lg
        {	display: none !important;
        }
    }

    @media (min-width:992px) and (max-width:1199px)
    {	.hidden-md
        {	display: none !important
        }
        .visible-xs
        {	display: none !important;
        }
        .visible-sm
        {	display: none !important;
        }
        .visible-md
        {	display: block !important;
        }
        .visible-lg
        {	display: none !important;
        }
    }

    @media (min-width:1200px)
    {	.hidden-lg
        {	display: none !important
        }
        .visible-xs
        {	display: none !important;
        }
        .visible-sm
        {	display: none !important;
        }
        .visible-md
        {	display: none !important;
        }
        .visible-lg
        {	display: block !important;
        }
    }
</style>