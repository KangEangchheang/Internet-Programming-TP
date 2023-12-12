<template>
  <div class="cont">
    <Header/>
    <MenuSelection/>
    <RouterView></RouterView>
  </div>
</template>
<script>
  import Header from './components/Header.vue';
  import MenuSelection from './components/MenuSelection.vue';
  import {RouterLink,RouterView} from 'vue-router'

  export default {
    data(){
      return {

      }
    },

  };
</script>
<style>
.cont {
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    min-height: 100vh;
}
</style>