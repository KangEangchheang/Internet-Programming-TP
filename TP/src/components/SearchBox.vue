<template>
    <div class="searchbox">
        <div>
            <select>
                <option>All Category</option>
                <option>Milks & Dairies</option>
                <option>Coffes & Teas</option>
                <option>Pet Foods</option>
                <option>Meats</option>
                <option>Vegetables</option>
                <option>Fruits</option>
            </select>
        </div>
        <div style="width:100%;display:flex;padding-left: 1rem;">
            <hr style="height:60%;align-self: center;opacity:0.3;"/>
            <input type="search" placeholder="Search"/>
        </div>
        <img src="../assets/icons/fi-rs-search.svg" style="scale: 0.8;"/>
    </div>
</template>
<script>
    export default{
        name:"SearchBox",
    }
</script>
<style>
.searchbox{
    width: 40%;
    display: flex;
    border:2px solid rgb(59, 183, 126,0.4);
    border-radius: 4px;
    padding:0.5rem 1rem;
    height: 3rem;
}
.searchbox select{
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    background:none;
    border:none;
    text-align: center;
}
.searchbox input{
    display: flex;
    flex-grow:1;
    outline: none;
    border:0px;
    padding-left: 1rem;
    width: 100%;
    color:var(--vt-c-divider-dark-1);
}
</style>