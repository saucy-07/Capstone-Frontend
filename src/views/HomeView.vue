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
    <div class="category-header">
          <p>
            We sell 3 of the best types of pet snakes!
          </p>
        </div>
    <div class="product-category-div">
      <div class="snake-div">
        <div class="snake-img">
          <img src="https://i.postimg.cc/NMYYSVhS/Banana-Ball-Python-4by3.jpg" alt="ball-python">
        </div>
        <div class="snake-category-info">
          <p>
            Ball Pythons
          </p>
        </div>
      </div>
      <div class="snake-div">
        <div class="snake-div">
        <div class="snake-img">
          <img src="https://i.postimg.cc/mDwwycNJ/corn-snake-4by3.jpg" alt="corn-snake">
        </div>
        <div class="snake-category-info">
          <p>
            Corn Snakes
          </p>
        </div>
      </div>
      </div>
      <div class="snake-div">
        <div class="corn-snake-div">
        <div class="snake-div">
        <div class="snake-img">
          <img src="https://i.postimg.cc/gkPh2cV6/king-snake-category-4by3.jpg" alt="kingsnake">
        </div>
        <div class="snake-category-info">
          <p>
            Kingsnakes
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>
    <div class="products-link-div">
      <button class="products-bar-div"><router-link class="products-link" to="/src/views/ProductsView.vue">Products</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.content-wrap{
  min-height: 50vw;
}
.hero-div {
  width: 98%;
  height: 50%;
  justify-content: center;
  align-content: center;
  margin: 1% 2% 0 2%;
}
img {
  width: 98%;
  height: 50%;
}
.hero-div p {
  font-size: 4.5vw;
  font-weight: bold;
}
.top-right {
  position: absolute;
  top: 7vh;
  right: 2vw;
  width: 17%;
  text-align: center;
}
.category-header {
  text-align: center;
  margin: 1vw 2vw 1vw 2vw;
}
.category-header p {
  font-size: 3vw;
}
.product-category-div{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2vh;
}
.snake-div{
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 25vw;
}
.snake-img{
  width: 25vw;
}
.snake-img img{
  width: 25vw;
}
.snake-category-info{
  width: 25vw;
  text-align: center;
}
.snake-category-info p{
  font-size: 2vw;
}
.products-link-div{
  text-align: center;
}
.products-bar-div:hover {
  background-color: rgb(76, 252, 0);
}
.products-bar-div:active {
  background-color: rgb(0, 205, 0);
}
.products-bar-div {
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 1vw auto;
  width: 8vw;
  border: none;
  background-color: rgba(4, 255, 0, 0.936);
  height: 2.3vw;
  font-size: 1.4vw;
}
.products-link {
  text-decoration: none;
  color: black;
}
@media only screen and (max-width: 565px) {
  .top-right{
    top: 12vh;
  }
  /* .product-category-div{
    display: flex;
    flex-direction: column;
  } */
}
</style>