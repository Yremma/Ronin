<template>
    <div id="classroom" style="position:relative">

        <div class="divDivisor">
            Quiénes Somos
        </div>

        <div id="divAntes"   :class="ClaseAntes"    style="width:100vw; height:100vh"></div>

        <div id="divDespues" :class="ClaseDespues"  style="width:100vw; height:100vh"></div>

        <div class="Historia" id="Historia">
            <el-row type="flex" justify="center">
                <el-col :span="18" :class="ClaseHistoria">
                    Somos una banda tucumana de covers de canciones de anime y dibujos animados formada 
                    en 2013 (originalmente bajo el nombre de Multiplayer) por los músicos Facundo Lopez Sales, 
                    Javier Esteban Pedrosa y Alvaro Angel Lobo.<br>
                    En 2017 se sumaron Nahuel Hardoy, Ivan Sosa e Irema Paola Dip para dar inicio a la formación 
                    de la banda que hoy conocemos.<br><br>
                    Nuestro sonido se destaca por las armonías vocales y los coros, logrando así 
                    interpretaciones mas eufóricas de las canciones para poder brindar un show mas festivo y
                    nuestra puesta en escena se caracteriza por la interacción con el público (al punto de 
                    invitar a los espectadores a subir a cantar).<br>
                </el-col>
            </el-row>
        </div>

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
                ClaseHistoria:      'HistoriaHorizontal',
                Offset:             0,
            }
        }, 

        methods: {
            handleScroll (e) {
                this.Offset = 5 + window.scrollY * 0.03;                
                var aux     = document.getElementById('Historia');
                aux.style.top = this.Offset + '%';
            } 
        },
        
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        mounted()
        {   if(this.Alto>this.Ancho)    
            {   this.ClaseAntes      = 'AntesVertical';
                this.ClaseDespues    = 'DespuesVertical';
                this.ClaseHistoria   = 'HistoriaVertical';
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

    .Historia
    {   position: absolute;
    }
    .Historia .el-row .el-col
    {   background-color: rgba(0,0,0,0.5);
        padding: 30px;
        text-align: justify;
    }

    .HistoriaHorizontal
    {   font-size: 2.5vw;
    }
    .HistoriaVertical
    {   font-size: 2.5vh;
    }
</style>