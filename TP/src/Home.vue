<template>
    <Showcase/>
    <Menu :title="'Featured Categories'"/>
    <div class="CategoryList">
        <Category v-for="item in catitems" :key="item.id" 
        :title="item.title" 
        :color="item.color" 
        :quantity="getCountQty(item.id)" 
        :imagePath="item.imagePath"/>    
    </div>
    <div class="PromotionList">
        <Promotion v-for="item in promoitem" :key="item.id" 
        :btnColor="item.buttonColor" 
        :color="item.color" 
        :text="item.text" 
        :imagePath="item.imagePath"/>
    </div>
    <Menu :title="'Popular Products'"/>
    <div class="ProductList">
        <Product v-for="item in proditems"
        :image="item.image"
        :name="item.name"
        :rate="item.rate"
        :discountPercentage="item.discountPercentage"
        :tag="item.tag"
        :description="item.description"
        :sellPrice="item.sellPrice"/>
    </div>
</template>
<script>
    import Category from '@/components/Category.vue';
    import Promotion from '@/components/Promotion.vue';
    import Menu from '@/components/Menu.vue';
    import Product from '@/components/Product.vue';
    import {mapState} from 'pinia';
    import {useProductStore} from './stores/productStore';
    import Showcase from './components/Showcase.vue';

    export default {
        setup(){
        const myProductStore = useProductStore();
        return {myProductStore};
        },
        computed:{
            ...mapState(useProductStore, ['promoitem']),
        ...mapState(useProductStore, ['catitems']),
        ...mapState(useProductStore, ['proditems']),
        
        },
        methods:{
            getCountQty(id){
                return this.proditems.reduce((result, item) => {
                    if (item.category === id) {
                    result++;
                    }
                return result;
                }, 0);
            },
        },
    data(){
        return {

        }
    },
    components: {
        Category,
        Promotion,
        Menu,
        Product,
        Header,
        MenuSelection,
        Showcase
    },
};
</script>
<style>


.ProductList {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    gap: 1.33rem;
}

.CategoryList {
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    gap: 1.33rem;
}

.PromotionList {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>