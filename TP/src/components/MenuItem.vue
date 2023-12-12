<template>
    <div class="TabSelection">
        <img v-if="icon!='null'" :src="icon" alt=""/>
        <p :style='{fontWeight: fww}'>{{ title }}</p>
    </div>
</template>
<script>
    export default{
        props:["title","icon","fww"]
    }
</script>
<style>
    .TabSelection{
        display:flex;
        gap:0.2rem;
        margin-left:5px;
        align-items: center;
    }
    .TabSelection img{
        width:18px;
    }
</style>