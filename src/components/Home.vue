<template>
    <div id="home" style="overflow:hidden">

        <!-- Logo Principal -->
        <Logo       style="position:relative"></Logo>

        <!-- Classroom -->
        <Classroom  style="position:relative"></Classroom>

        <!-- Nosotros -->
        <Nosotros   style="position:relative"></Nosotros>
        
        <!-- Contactanos -->
        <Contacto   style="position:relative"></Contacto>
    </div>
</template>



<script>
    import Logo         from '@/components/Logo'
    import Classroom    from '@/components/Classroom'
    import Nosotros     from '@/components/Nosotros'
    import Contacto     from '@/components/Contacto'

    
    export default 
    {   components: {
            Logo,
            Classroom,
            Nosotros,
            Contacto
        },

        mounted()
        {   
        }
    }
</script>



<style>
    div
    {   font-weight: bold;
        font-variant: small-caps;
        color: #fff;
    }
</style>