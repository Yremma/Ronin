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


    .divDivisor
    {   width: 100vw;  
        color: #fff; 
        text-align: center; 
        font-weight: bold; 
        font-size: x-large; 
        padding: 10px; 
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        background: linear-gradient(270deg, #000000, #ff0000, #000000);
        background: linear-gradient(270deg, #000000, #000000, #ff0000, #000000, #000000);
        background-size: 1000% 1000%;
        -webkit-animation: AnimationName 30s ease infinite;
        -moz-animation: AnimationName 30s ease infinite;
        animation: AnimationName 30s ease infinite;
    }
    @-webkit-keyframes AnimationName 
    {   0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName 
    {   0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName 
    {   0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    

    
    .el-input, .el-input--mini, .el-input-group, .el-input-group--prepend, .el-input-group__prepend, input, .el-input__inner, .el-textarea__inner
    {   border-radius: 0px !important;
        background: rgba(255,255,255,0.1) !important;
        border: 1px solid #fff;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .el-input:focus, .el-input--mini:focus, .el-input-group:focus, .el-input-group--prepend:focus, .el-input-group__prepend:focus, input:focus, .el-input__inner:focus, .el-textarea__inner:focus
    {   outline: 3px solid #f00;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }

    .el-button--danger, .el-button--danger:active, .el-button--danger:focus
    {   background: #C30000;
        border: none;
        border-radius: 0px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .el-button--danger:hover
    {   background: #FF0000;
        border: none;
        border-radius: 0px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
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