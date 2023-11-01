<template>
  <div class="cont">
    <div class="CategoryList">
      <Category v-for="item in catitems" :key="item.id" 
      :title="item.title" 
      :color="item.color" 
      :quantity="item.quantity" 
      :imagePath="item.imagePath"/>    
    </div>
    <div class="PromotionList">
      <Promotion v-for="item in promoitem" :key="item.id" 
      :btnColor="item.buttonColor" 
      :color="item.color" 
      :text="item.text" 
      :imagePath="item.imagePath"/>
    </div>
  </div>
</template>
<script>
  import Category from './components/Category.vue';
  import Promotion from './components/Promotion.vue';

  export default {
  name: "App",
  data(){
    return {
      promoitem:[
        { id: 1, color: "#F0E8D5", buttonColor: "#3BB77E", text: "Everyday Fresh & Clean with Our Products",imagePath: new URL('./assets/image/Cms-04.png', import.meta.url).href },
        { id: 2, color: "#F3E8E8", buttonColor: "#3BB77E", text: "Make your Breakfast Healthy and Easy", imagePath: new URL('./assets/image/Cat-01 1.png', import.meta.url).href },
        { id: 3, color: "#E7EAF3", buttonColor: "#FDC040", text: "The best Organic Products Online", imagePath: new URL('./assets/image/Cms-03 1.png', import.meta.url).href },
      ],
      catitems:[
        { id: 1, color: "rgb(163, 230, 53,", title:"Cake & Milk", quantity:14, imagePath: new URL('./assets/image/cat-13.png',import.meta.url).href},
        { id: 2, color: "rgb(251, 146, 60,", title:"Peach", quantity:17, imagePath: new URL('./assets/image/cat-11.png', import.meta.url).href },
        { id: 3, color: "rgb(74, 222, 128,", title: "Oganic Kiwi", quantity: 21, imagePath: new URL('./assets/image/cat-12.png', import.meta.url).href },
        { id: 4, color: "rgb(225, 29, 72,", title: "Red Apple", quantity: 68, imagePath: new URL('./assets/image/cat-9.png', import.meta.url).href },
        { id: 5, color: "rgb(202, 138, 4,", title: "Snack", quantity: 34, imagePath: new URL('./assets/image/cat-3.png', import.meta.url).href },
        { id: 6, color: "rgb(124, 58, 237,", title: "Black plum", quantity: 25, imagePath: new URL('./assets/image/cat-4.png', import.meta.url).href },
        { id: 7, color: "rgb(34, 197, 94,", title: "Vegetables", quantity: 65, imagePath: new URL('./assets/image/cat-1.png', import.meta.url).href },
        { id: 8, color: "rgb(245, 158, 11,", title: "Headphone", quantity: 33, imagePath:  new URL('./assets/image/cat-15.png', import.meta.url).href },
        { id: 9, color: "rgb(132, 204, 22,", title: "Cake & Milk", quantity: 54, imagePath: new URL('./assets/image/cat-14.png', import.meta.url).href },
        { id: 10, color: "rgb(124, 58, 237,", title: "Orange", quantity: 63, imagePath: new URL('./assets/image/cat-7.png', import.meta.url).href }
      ]
    }
  },
  components: {
    Category,
    Promotion
},
};
</script>
<style>
  .cont{
    display:flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    padding:2rem;
    gap:2rem;
  }
  .CategoryList{
    flex-wrap: wrap;
    width: 100%;
    display:flex;
    justify-content: center;
    gap:1.33rem;
  }
  .PromotionList{
    flex-wrap: wrap;
    width: 100%;
    display:flex;
    justify-content: center;
    gap:1rem;
  }
</style>