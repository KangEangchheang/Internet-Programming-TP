<template>
    <div class="header">
        <div style="display:flex;gap:.5rem;">
            <img class="logo" src="../assets/icons/icon.svg"/>
            <div style="">
                <h1 style="margin:0;color:var(--tpgreen);font-size: 38px;">Melon</h1>
                <p style="font-size: 13px;">MART & GROCERY</p>
            </div>
        </div>
        <SearchBox/>
        <div class="tabsel">
            <MenuItem title="Account" :icon="this.account"/>
            <MenuItem title="Compare" :icon="this.compare"/>
            <MenuItem title="Wishlist" :icon="this.wish"/>
            <MenuItem title="Cart" :icon="this.cart"/>
        </div>
    </div>
</template>
<script>
import MenuItem from './MenuItem.vue';
import SearchBox from './SearchBox.vue';

    export default{
    components: { SearchBox, MenuItem },
    data(){
        return{
            account: new URL('../assets/icons/fi-rs-user.svg', import.meta.url).href,
            compare: new URL('../assets/icons/icon-compare 1.svg', import.meta.url).href,
            wish: new URL('../assets/icons/fi-rs-heart.svg', import.meta.url).href,
            cart: new URL('../assets/icons/fi-rs-shopping-cart.svg', import.meta.url).href
        }
    }
}
</script>
<style>
    .header{
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .tabsel{
        display: flex;
        align-items: center;
        gap:0.5rem;
    }
</style>