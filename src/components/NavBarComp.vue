<template>
  <nav>
    <div class="store-logo-div">
      <img src="https://i.postimg.cc/0yLj1xJ9/pngegg.png" alt="home" />
      <router-link class="store-logo" to="/">THE DANGER NOODLE™</router-link>
    </div>
    <div class="router-link-div">
      <router-link class="router-link" to="../../src/views/LogInView.vue"
        >Log In</router-link
      >
      <router-link class="router-link" to="../../src/views/WishListView.vue"
        >Wish List</router-link
      >
      <router-link class="router-link" to="../../src/views/CartView.vue"
        >Cart</router-link
      >
      <router-link class="router-link" to="../../src/views/CheckoutView.vue"
        >Checkout</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComp",
};
</script>

<style scoped>
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes zoom {
  0% {
    font-size: 100%;
  }
  100% {
    font-size: 105%;
  }
}
* {
  font-size: 3vh;
}
nav {
  padding: 1vh 0 1vh 0;
  background-color: #6d8b74;
  display: flex;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9;
}
.router-link {
  color: white;
  text-decoration: none;
  padding: 0px 15px 0px 0px;
  margin-left: auto;
  animation-name: fadeInAnimation;
  animation-iteration-count: 1;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
.router-link-div {
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.store-logo {
  align-content: center;
  color: white;
  text-decoration: none;
  margin-top: auto;
  margin-bottom: auto;
  padding: 0 0 0 5px;
  animation-name: fadeInAnimation;
  animation-iteration-count: 1;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
.store-logo-div {
  display: flex;
}
.store-logo-div img {
  height: 30px;
  margin: auto 0 auto 15px;
  animation-name: fadeInAnimation;
  animation-iteration-count: 1;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
.store-logo:active,
.router-link:active,
.store-logo:hover,
.router-link:hover {
  color: rgb(152, 212, 162);
  text-decoration: underline;
  animation-name: zoom;
  animation-duration: 2s;
}
.store-logo:active,
.router-link:active {
  color: rgb(149, 238, 164);
  text-decoration: underline;
}
@media only screen and (max-width: 565px) {
  nav {
    display: flex;
    flex-direction: column;
  }
  .store-logo-div,
  .router-link-div {
    margin-left: auto;
    margin-right: auto;
  }
  .store-logo-div img {
    margin: 0 0 0 0;
  }
  .router-link {
    padding: 0 2vw 0 2vw;
    justify-content: space-evenly;
  }
}
</style>
