<template>
  <div class="content-wrap">
    <h1>Home View</h1>
    <router-link to="/src/views/ProductsView.vue">Products</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.content-wrap{
  min-height: 100vh;
}
</style>