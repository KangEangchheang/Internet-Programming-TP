<template>
    <nav>
        <h2 v-text="title"></h2>
        <div class="menu">
            <span style="font-weight: bold;">All</span>
            <span>Milks & Dairies</span>
            <span>Coffee & Teas</span>
            <span>Pet Foods</span>
            <span>Meats</span>
            <span>Vegetables</span>
            <span>Fruits</span>
        </div>
    </nav>
</template>
<script>

    export default{
        props:{
            title: String,
        }
    }
</script>
<style>
    nav{
        display:flex;
        width: 100%;
        margin:0.5rem 0;
        justify-content: space-between;
        align-items: center;
        color: #2c3e50;
    }
    h2{
        color:black;
        font-size: 32px;
        width: auto;
        font-weight: bold;
        color:#2c3e50;
    }
    .menu{
        display:flex;
        gap:2rem;
        font-size: 16px;
    }
</style>