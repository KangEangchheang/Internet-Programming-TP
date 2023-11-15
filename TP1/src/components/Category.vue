<template>
    <div class="Category" :style="{backgroundColor: color+'0.2)',border:'1.6px solid '+color+',1)'}">
        <img class="Image" v-bind:src="imagePath"/>
        <div class="Title">
            <p1 v-text="title"></p1>
            <p2 v-text="quantity + ' items'"></p2>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Category",
        props:["title","color","imagePath","quantity"],
    }   
</script>
<style scoped>
    .Category{
        width: 8rem;
        padding:1rem;
        border-radius: 10px;
        display:flex;
        flex-direction: column;
        align-items: center;
        gap:5px;
    }
    .Image{
        height: 5rem;
        
    }
    .Title{
        display:flex;
        flex-direction: column;
    }
    p1{
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    }
    p2{
        font-weight: bold;
        font-weight: light;
        opacity: 0.5;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
    }
</style>