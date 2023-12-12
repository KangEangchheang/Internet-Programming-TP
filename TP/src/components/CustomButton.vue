<template>     
    <button :style="{backgroundColor: color}" class="CustomButton">
        <!-- {{Shop Now ➡}} -->{{ title}}
    </button>
</template>
<script>
    export default {
        props:["color","title"],
    }
</script>
<style scoped>
    Button {
        padding: 3px 15px; 
        border-color:rgba(85, 85, 85, 0.10);
        border-radius: 3px;
        color:white;
        box-shadow: 14px 14px 36px 0px rgba(85, 85, 85, 0.10); 
        cursor:pointer;
    }
</style>