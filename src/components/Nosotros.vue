<template>
    <div id="nosotros" style="position:relative">

        <div class="divDivisor">
            Nosotros
        </div>

        <swiper :options="swiperOption" class="swiper-box" style="position:relative">
            <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>

            <swiper-slide><nosotros_-nahuel style="position:relative"></nosotros_-nahuel></swiper-slide>
            <swiper-slide><nosotros_-flaco style="position:relative"></nosotros_-flaco></swiper-slide>
            <swiper-slide><nosotros_-nigga style="position:relative"></nosotros_-nigga></swiper-slide>
            <swiper-slide><nosotros_-irema style="position:relative"></nosotros_-irema></swiper-slide>
            <swiper-slide><nosotros_-justy style="position:relative"></nosotros_-justy></swiper-slide>
            <swiper-slide><nosotros_-oso style="position:relative"></nosotros_-oso></swiper-slide>

        </swiper>
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
                swiperOption: 
                {   slidesPerView: 1,
                    mousewheel: false,
                    speed: 4000,
                    autoplay: {
                        delay: 4000,
                    },                    
                    effect: 'fade',
                }        
            }
        }, 


        mounted()
        {   
        }  
    }
</script>



<style>
    .swiper-slide 
    {   -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background-color: transparent!important;
        justify-content: space-around!important;
    }

    .parallax-bg 
    {   position: absolute;
        left: 0;
        top: 0;
        width: 130%;
        height: 100%;
        -webkit-background-size: 100vw 100vh;
        background-size: cover;
        background-position: top;
        /*background-image: url("../assets/Manos.png");*/
    }
    .swiper-slide .title {
        font-size: 41px;
        font-weight: 700;
        font-variant: small-caps;
    }
    .swiper-slide .text {
        font-size: 16px;
        line-height: 1.3;
    }
</style>