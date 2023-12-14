<template>
    <div class="Productpage">
        <div style="display:flex;gap:.4rem;align-items: center;">
            <RouterLink class="RouterLink" to="/">Home</RouterLink>
            <img src="../assets/icons/fi-rs-angle-small-right 2.svg" style="margin-top: 4px;height: 12px;"/>
            <RouterLink class="RouterLink" :to="`/categories/${Product.category}`">{{Category}}</RouterLink>
            <img src="../assets/icons/fi-rs-angle-small-right 2.svg" style="margin-top: 4px;height: 12px;"/>
            <p style="color:var(--tpgreen);font-weight: 500;">{{ Product.name}}</p>
        </div>
        <div class="product">
            <div class="productimg">
                <img style="position: absolute;top:5%;right:5%;width: 20px;height: 20px;opacity: 0.5;" src="../assets/icons/fi-rs-search.svg"/>
                <img :src="Product.image" alt="img"/>
            </div>
            <div class="productdet">
                <MenuItem style="background-color:rgba(59, 183, 126, 0.20);height:min-content;width: max-content;padding-right: 2rem;color:var(--tpgreen);border-radius: 5px;" fww="600" title="In Stock"/>
                <h1 style="font-weight: 600;font-size: 40px;width: auto; height:auto;margin:0;line-height: 50px;">{{Product.name}}</h1>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                    <div style="display:flex;gap:0.1rem">
                        <!-- star rating -->
                        <div style="color:#FDC040; font-size:14px;" v-for="i in Product.rate">★</div>
                    <div style="color:#7E7E7E;font-size:14px;" v-for="i in (5 - Product.rate)">★</div>
                    </div>
                    <span>(<p3>{{ Product.rate.toFixed(1) }}</p3>)</span>
                </div>
                <div style="display:flex; gap:3rem; align-items: baseline;">
                    <h1 style="margin:0;font-weight: 600;font-size: 40px;color:var(--tpgreen);width: min-content;">${{Product.sellPrice-(Product.sellPrice*(Product.discountPercentage/100)).toFixed(2) }}</h1>
                    <h1 style="margin:0;font-weight: 600;font-size: 24px;color:gray;opacity: .6;text-decoration: line-through;margin: 0;width: min-content;">${{Product.sellPrice}}</h1>
                </div>
                <p>{{Product.description}}</p>
                <div style="display:flex;gap:1rem;margin-bottom: 5rem;">
                    <div class="addproductqtn">
                        {{ count }}
                        <div style="display:flex; flex-direction: column;">
                            <img @click="inc()" src="../assets/icons/fi-rs-angle-small-up.svg"/>
                            <img @click="dec()" src="../assets/icons/fi-rs-angle-small-down.svg"/>
                        </div>
                    </div>
                    <div class="custombtn">
                        <img style="width:14px;margin-left: 1rem;position: relative;top:-3%;" src="../assets/icons/fi-rs-shopping-cart-white.svg"/>
                        <button>Add To Cart</button>
                    </div>
                    <div style="display:flex; place-items: center;border:2px solid rgb(146, 145, 145,0.4);padding:1rem;border-radius: 5px;opacity: 0.5;cursor: pointer;">
                        <img style="width: 16px;" src="../assets/icons/fi-rs-heart.svg"/>
                    </div>
                    <div style="display:flex; place-items: center;border:2px solid rgb(146, 145, 145,0.2);padding:1rem;border-radius: 5px;cursor: pointer;">
                        <img style="width: 16px;" src="../assets/icons/fi-rs-shuffle 1.svg"/>
                    </div>
                </div>
                <div style="display:flex;flex-direction: column;position: absolute;bottom:0;">
                    <span style="width: 100%;">Vendor:<span style="margin-left: 10px;opacity: 0.6;">NestMart</span></span>
                    <span style="width: 100%;">SKU:<span style="margin-left: 10px;opacity: 0.6;">FJS823JWF</span></span>
                </div>
            </div>
        </div>
        <!-- scrollproduct -->
        <div class="scrollproduct">
            <button class="arrow" style="background-color: rgb(231, 231, 231);top:25%;right:0;">
                <img src="../assets/icons/fi-rs-arrow-small-right 2.svg"/>
            </button>
            <div style="display: flex;gap:1rem;">
                <img class="miniprod" src="../assets/image/p5.png"/>
                <img class="miniprod" src="../assets/image/p6.png"/>
                <img class="miniprod" src="../assets/image/p7.png"/>
                <img class="miniprod" src="../assets/image/p8.png"/>
            </div>
             <button class="arrow" style="background-color: var(--tpgreen);top:25%;left:0;">
                <img src="../assets/icons/fi-rs-arrow-small-right 2 white.svg" style="transform: rotate(180deg);"/>
             </button>
        </div>
        <!-- description -->
        <div class="desc">
            <div style="display: flex;gap:3rem;">
                <button>Description</button>
                <button>Additional info</button>
                <button>Reviews <span style="font-weight: 700;">({{ Product.rate + Math.floor(Math.random() * 10) + 1 }})</span></button>
            </div>
            <div style="display:flex;flex-direction: column;gap:.6rem;">
                {{ Product.description }}
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink, useRoute,useRouter } from 'vue-router';
import MenuItem from '../components/MenuItem.vue';
import { useProductStore } from '../stores/productStore';

    export default {
    components: { RouterLink, MenuItem,},
    setup(){
        const route = useRoute();
        const router = useRouter();
        const Productid = route.params.productId;
        //redirect to notfound if category id is bigger than what we have
        const myProductStore = useProductStore();
        if (0 > Productid > myProductStore.proditems.length) {
            router.push('/NotFound');
        }
        else {
            // get specific category with id in the store cuz we dont need 10 of them and write query param all the time
            const Product = myProductStore.getProd(Number(Productid) - 1);
            const Category = myProductStore.getCat((Product.category)-1).title;
            return { Product ,Category};
        }
    },
    data(){
        return{
            count:0,
        }
    },
    methods:{
        inc(){
            this.count ++;
        },
        dec(){
            if (this.count>0){   
                this.count--;
            }
        }
    }
}
</script>

<style scoped>
.arrow{
    position:absolute;
    font-size: 20px;
    border-radius: 50%;
    padding:1rem;
    width:3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    cursor:pointer;
    border:none;
}
.scrollproduct{
    width: 50%;
    padding:0 6rem;
    position: relative;
}
.scrollproduct .miniprod{
    width: 100%;
    border:2px solid rgb(245, 245, 245);
    border-radius: 5px;
}
.desc{
    padding:2rem 4rem;
    border:2px solid rgb(221, 221, 221,0.2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap:1.5rem;
    padding-bottom: 5rem;
}
.desc button{
    background: none;
    border: 2px solid rgb(224, 224, 224,0.3);
    color:var(--tpgreen);
    padding:.5rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    cursor: pointer;
    font-size: 16px;
}
.desc button:active{
    box-shadow: 5px 5px 15px 0px rgba(24, 24, 24, 0.05);
}
.addproductqtn{
    display: flex;
    padding:0 .5rem 0 1.5rem;
    border: 2px solid var(--tpgreen);
    border-radius: 5px;
    align-items: center;
    gap:1.5rem;
    font-weight: 600;
    color:var(--tpgreen);
}
.addproductqtn img:hover{
    cursor: pointer;
    background-color: rgb(146, 144, 144,0.2);
    border-radius: 5px;
}
.custombtn{
    background: var(--tpgreen);
    border-radius: 5px;
    cursor:pointer;
    display:flex;
    align-items: center;
}
.custombtn button{
    background:none;
    color:white;
    padding:.3rem 1rem;
    border:none;
    cursor: pointer;
}
.product{
    display:flex;
    gap:2rem;
    height: min-content;

}
.productimg{
    position: relative;
    min-width: 50%;
    max-width: 55%;
    padding:2rem;
    border:1px solid rgb(112, 112, 112,0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
}
.productdet{
    display:flex;
    flex-direction: column;
    gap:1rem;
    justify-content: start;
    position: relative;
}
.productimg img{
    width: 100%;
}   
.product > div{
    display: flex;
    flex-grow: 1;
}
    .Productpage{
        display: flex;
        flex-direction: column;
        gap:1.5rem;
        width: 100%;
    }
    .RouterLink{
        text-decoration: none;
        color:gray;
        opacity: 0.8;
        font-weight: 500;
    }
</style>