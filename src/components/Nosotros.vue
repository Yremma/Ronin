<template>
    <div id="nosotros" style="height:100vh">

        <div class="divDivisor">
            Nosotros
        </div>

        <div style="position:relative">
            <nosotros_-nahuel   id="div1"   style="position:absolute"   class="divNosotros divVisible"  ></nosotros_-nahuel>
            <nosotros_-flaco    id="div2"   style="position:absolute"   class="divNosotros"             ></nosotros_-flaco>
            <nosotros_-nigga    id="div3"   style="position:absolute"   class="divNosotros"             ></nosotros_-nigga>
            <nosotros_-irema    id="div4"   style="position:absolute"   class="divNosotros"             ></nosotros_-irema>
            <nosotros_-justy    id="div5"   style="position:absolute"   class="divNosotros"             ></nosotros_-justy>
            <nosotros_-oso      id="div6"   style="position:absolute"   class="divNosotros"             ></nosotros_-oso>
        </div>
    </div>
</template>



<script>
    import Nosotros_Flaco   from '@/components/Nosotros_Flaco'
    import Nosotros_Irema   from '@/components/Nosotros_Irema'
    import Nosotros_Justy   from '@/components/Nosotros_Justy'
    import Nosotros_Nahuel  from '@/components/Nosotros_Nahuel'
    import Nosotros_Nigga   from '@/components/Nosotros_Nigga'
    import Nosotros_Oso     from '@/components/Nosotros_Oso'


    export default 
    {   components: {
            Nosotros_Flaco,
            Nosotros_Irema,
            Nosotros_Justy,
            Nosotros_Nahuel,
            Nosotros_Nigga,
            Nosotros_Oso
        },
        
        
        data()
        {   return {                 
                indice: 1,
            }
        }, 


        mounted()
        {   setTimeout(function() {
                document.getElementById('div1').classList.toggle('divVisible');
                document.getElementById('div2').classList.toggle('divVisible');
                this.indice = 2;
                setInterval(function() {
                    document.getElementById('div' + this.indice).classList.toggle('divVisible');
                    this.indice         = this.indice + 1;
                    if(this.indice==7)  this.indice = 1;
                    document.getElementById('div' + this.indice).classList.toggle('divVisible');
                }, 8000);
            }, 4000);  
        }  
    }
</script>



<style>
    .divNosotros
    {   opacity: 0;
        -webkit-transition: all 2000ms ease-in-out;
        -moz-transition: all 2000ms ease-in-out;
        -o-transition: all 2000ms ease-in-out;
        -ms-transition: all 2000ms ease-in-out;
        transition: all 2000ms ease-in-out;
    }
    .divVisible
    {   opacity: 1;
        -webkit-transition: all 2000ms ease-in-out;
        -moz-transition: all 2000ms ease-in-out;
        -o-transition: all 2000ms ease-in-out;
        -ms-transition: all 2000ms ease-in-out;
        transition: all 2000ms ease-in-out;
    }
</style>