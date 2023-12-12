<template>
    <div class="Promotion" :style="{ backgroundColor: color }">
        <div class="titles">
            <h1 v-text="text"></h1>
            <CustomButton class="CustomButton" :color="btnColor" title="Shop now →"/>
        </div>
        <img :src="imagePath" alt="img" class="Images"/>
    </div>
</template>
<script>
import CustomButton from './CustomButton.vue';

export default {
    name:"Promotion",
    props:["color","btnColor","text","imagePath"],
    components:{
        CustomButton,
}

}
</script>
<style>
    .CustomButton{
        margin-left: 1rem;
        position:absolute;
        bottom: 20%;
        left:3%;    
    }
    .Images{
        height: 80%;
        position:absolute;
        bottom:0;
        right:0;
    }
    h1{
        font-size:24px;
        line-height: 32px; 
        font-weight: bold;
        width: 55%;
        margin-left: 2rem;

    }
    .Promotion{
        position: relative;
        padding:3rem 0rem;
        gap:1rem;
        display: flex;
        flex-grow: 1;
        flex-basis: 10%;
        border-radius: 10px;
        height:15rem;
    }
</style>