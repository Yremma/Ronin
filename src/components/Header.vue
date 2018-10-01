<template>
    <div id="header" class="menu">
        
        <!-- MENU PANTALLAS --> 
        <el-menu class="hidden-xs-only" mode="horizontal" background-color="#121717" text-color="#ffffff" active-text-color="#ff0000" style="border-bottom:0px">
            <el-menu-item index="3" style="float:right" v-on:click="ir_a('Nosotros')"   >Nosotros           </el-menu-item>
            <el-menu-item index="2" style="float:right" v-on:click="ir_a('classroom')"  >Quiénes Somos      </el-menu-item>           
            <el-menu-item index="1" style="float:right" v-on:click="ir_a('logo')"       >Inicio             </el-menu-item>  
        </el-menu>

        <!-- MENU CELULARES -->
        <el-collapse class="hidden-sm-and-up" style="margin-left:0px">
            <el-collapse-item>
                <template slot="title">
                    <i class="el-icon-menu"></i>&nbsp;&nbsp;&nbsp;<strong>Menú</strong>
                </template>
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('logo')"     >Inicio         </div>
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('classroom')">Quiénes Somos  </div>
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('Nosotros')" >Nosotros       </div>
            </el-collapse-item>
        </el-collapse>

    </div>
</template>


<script>
    export default 
    {   name: 'Header',
        
        data()
        {   return { 
            };
        },

        methods: {
            ir_a(id)
            {   document.getElementById(id).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        }
    }
</script>


<style>
     .el-collapse-item__header
    {   background: #000000;
        color: #ffffff;
        font-weight: bold;
    }
    .el-collapse-item__wrap
    {   background: #000000;        
        font-weight: bold;
        padding: 0px;
    }
    .el-collapse-item__wrap div
    {   padding: 0px;
    }
    .el-collapse-item__wrap div div
    {   background: #111111;        
        color: #ffffff;
        width: 100%;
        border: none;
        padding-left: 40px !important;
        font-size: 13px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .el-collapse-item__wrap div div:hover
    {   background: #000000;       
        color: #ff0000;
        border-bottom: 2px solid #ff0000;
        padding-left: 60px !important;
        font-size: 15px;
        cursor: pointer;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }

    .menu 
    {   position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
    }
    .el-menu, .el-menu-item
    {   height: 60px !important;
        padding-top: 2px;
    }

    .el-dialog
    {   margin-left: 0px;
        margin-top: 5% !important;
        margin-bottom: 5% !important;
    }
    .el-dialog__header
    {   text-align: center; 
        font-size: 25px; 
        font-variant: small-caps; 
        font-weight: bold;
    }

    .el-dialog__body #contacto
    {   margin-top: -5%;
    }

    .el-dialog__headerbtn
    {   z-index: 999;
    }

    .el-dialog__headerbtn:hover
    {   padding: 0px;
    }
</style>