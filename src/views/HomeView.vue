<template>
  <div class="content-wrap">
    <div class="hero-div">
      <img src="https://i.postimg.cc/3wrg2t81/banana-ball-python-wallpaper-cropped.jpg" alt="banana-ball-python">
      <div class="top-right">
        <p>
          The Danger Noodle
        </p>
      </div>
    </div>
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
.hero-div {
  width: 100%;
  height: 50%;
  justify-content: center;
  align-content: center;
  margin: 1% 2% 0 2%;
}
img {
  width: 96%;
  height: 50%;
}
.hero-div p {
  font-size: 300%;
  font-weight: bold;
}
.top-right {
  position: absolute;
  top: 10%;
  right: 3%;
  width: 17%;
  text-align: center;
}
</style>