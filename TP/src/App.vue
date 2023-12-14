<template>
  <div class="cont">
    <Header/>
    <MenuSelection/>
    <RouterView :key="compkey"/>
  </div>
</template>
<script>
  import Header from './components/Header.vue';
  import MenuSelection from './components/MenuSelection.vue';
  import {RouterView} from 'vue-router'

  export default {
    components:{
      Header,
      MenuSelection,
    },
    data(){
      return{
        compkey:[0],
      }
    },
    created() {
      this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
          if (toParams != previousParams) {
            this.compkey = toParams;
          }
        }
      )
    },
  };
</script>
<style scoped>
.cont {
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
    padding: 2rem 4rem;
    gap: 2rem;
    min-height: 100vh;
    overflow-x: hidden;
}
</style>