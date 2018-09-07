<template>
    <div id="classroom">
        <div id="divAntes">
            <img src="../assets/antes.png" style="width:100%; opacity:0"/>
        </div>
        <div id="divDespues">
            <img src="../assets/despues.png" style="width:100%; opacity:0"/>
        </div>
    </div>
</template>



<script>
    export default 
    {   
    }
</script>



<style>
   #divAntes 
    {   background-image: url('../assets/antes.png');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
    #divDespues
    {   background-image: url('../assets/despues.png');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
</style>