<template>
    <div id="home" style="overflow:hidden">

        <!-- Logo Principal -->
        <Logo></Logo>

        <!-- Classroom -->
        <Classroom></Classroom>

        <!-- Nosotros -->

    </div>
</template>



<script>
    import Logo         from '@/components/Logo'
    import Classroom    from '@/components/Classroom'

    
    export default 
    {   components: {
            Logo,
            Classroom
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