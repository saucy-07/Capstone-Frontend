<template>
  <div class="content-wrap">
    <div class="sort-filter-div">
      <div class="category-filter">
        <p>Category:</p>
        <button @click="categoryFilter = 'Ball Python'" class="category-btn">Ball Pythons</button>
        <button @click="categoryFilter = 'Corn Snake'" class="category-btn">Corn Snakes</button>
        <button @click="categoryFilter = 'Kingsnake'" class="category-btn">Kingsnakes</button>
      </div>
      <div class="sort-search-div">
        <div class="sort-div">
          <p>Sort By:</p>
          <button class="sort-btn">A → Z</button>
        </div>
        <div class="search-div">
          <p>Search:</p>
          <input class="search-bar" type="text" v-model="search">
        </div>
      </div>
    </div>
    <div class="page">
      <div class="big-div">
        <div class="products-div" v-if="filteredProducts">
          <div class="product" v-show="product.category === categoryFilter" v-for="product of filteredProducts" :key="product">
            <div class="image-div">
              <img :src="product.productUrl" :alt="product.productName" />
              <div class="image-div-body">
                <h5 class="image-title">
                  {{ product.productName }}
                  <br />
                  R{{ product.amount }}
                </h5>
                <p class="image-category-text">
                  <span>Category: {{ product.category }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  data () {
    return {
      search: "",
      categoryFilter: 'Ball Python',
      categoryFilter: 'Corn Snake',
      categoryFilter: 'Kingsnake',
    }
  },
  computed: {
    filteredProducts() {
      return this.$store.state.productsList.filter(product => product.productName.toLowerCase().includes(this.search.toLowerCase()));
    },
    products() {
      return this.$store.state.productsList;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
}
.products-div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 15px 15px 15px 15px;
  justify-content: center;
  text-align: center;
}
.image-div img {
  height: 200px;
  width: 200px;
}
.product {
  padding: 10px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  margin-bottom: 40px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  text-align: center;
  margin-top: 15px;
}
</style>
