<template>
  <NavBarComp style="position: sticky"/>
  <router-view />
  <FooterComp style="position: relative"/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue'
import FooterComp from "./components/FooterComp.vue";

export default {
  components:{
    NavBarComp,
    FooterComp
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz@6..12&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}
*::-webkit-scrollbar {
  display: none;
}
</style>
