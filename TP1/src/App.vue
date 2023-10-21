<template>
  <div class="cont">
    <div class="CategoryList">
      <Category v-for="item in items" :key="item.id" :title="item.title" 
      :color="item.color" :quantity="item.quantity" :imagePath="item.imagePath"/>    
    </div>
  </div>
</template>
<script>
  import Category from './components/Category.vue';
  import cat1 from './assets/image/cat-1.png';
  import cat11 from './assets/image/cat-11.png';
  import cat12 from "./assets/image/cat-12.png";
  import cat9 from "./assets/image/cat-9.png";
  import cat3 from "./assets/image/cat-3.png";
  import cat4 from "./assets/image/cat-4.png";
  import cat15 from "./assets/image/cat-15.png";
  import cat14 from "./assets/image/cat-14.png";
  import cat7 from "./assets/image/cat-7.png";

  export default {
  name: "App",
  data(){
    return {
      items:[
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
    Category
},
};
</script>
<style>
  .cont{
    display:flex;
    align-items: center;
    flex-direction: column;
    padding:2rem;
  }
  .CategoryList{
    flex-wrap: wrap;
    width: 100vw;
    display:flex;
    justify-content: center;
    gap:0.4rem;
  }
</style>