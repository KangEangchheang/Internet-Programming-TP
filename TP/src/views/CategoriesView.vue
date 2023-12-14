<template>
    <div class="Categorypage">
        <div class="header">
            <div class="headerban"></div>
            <h1 style="font-weight: 600;margin: 0;">{{Category.title}}</h1>
            <div style="display: flex;gap:.5rem;align-items: center;">
                <RouterLink class="RouterLink" to="/">Home</RouterLink>
                <img src="../assets/icons/fi-rs-angle-small-right 2.svg" style="margin-top: 4px;"/>
                <p>Categories</p>
                <img src="../assets/icons/fi-rs-angle-small-right 2.svg" style="margin-top: 4px;"/>
                <p>{{Category.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink} from 'vue-router';
import {useProductStore} from '../stores/productStore.js';
import { useRoute,useRouter } from 'vue-router';
    export default {
    components: { RouterLink },
    setup(){
        const route = useRoute(); 
        const router = useRouter();
        const Categoryid = route.params.categoryId;
        //redirect to notfound if category id is bigger than what we have
        const myProductStore = useProductStore();
        if (0 > Categoryid > myProductStore.catitems.length) {
            router.push('/NotFound');
        }
        else{
            // get specific category with id in the store cuz we dont need 10 of them and write query param all the time
            const Category = myProductStore.getCat(Number(Categoryid) - 1);
            return { Category };
        }
    },
}
</script>
<style scoped>
.headerban{
    position: absolute;
    width:100%;
    height: 100%;
    top:0;
    left: 0;
    background-image: url('../assets/image/catheaderbanner.png');
    background-position: center;
    background-size: cover;
    opacity: 0.7;
}
    .Categorypage{
        width: 100%;
    }
    .Categorypage .header{
        background-color: rgba(59, 183, 126, 0.20);
        padding:3rem 2.5rem;
        border-radius: 10px;
        width: 100%;
        display: inline-block;
        position: relative;
    }
    .header p {
        font-weight: 500;
        color: gray;
        opacity: 0.8;
    }
    .header .RouterLink{
        font-weight: 500;
        color: gray;
        opacity: 0.8;
        text-decoration: none;
    }
</style>