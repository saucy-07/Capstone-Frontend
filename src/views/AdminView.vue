<template>
  <div class="content-wrap">
    <table>
      <tr>
        <th>Product ID</th>
        <th>Product Name</th>
        <th>Gender</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Product URL</th>
        <th>Action</th>
      </tr>
      <tr v-for="product,index in this.productsList" :key="index">
        <td>{{ product.productID }}</td>
        <td>{{ product.productName }}</td>
        <td>{{ product.gender }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.amount }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.productUrl }}</td>
        <td>
          <router-link
            :to="{
              path: '../views/' + product.productID + '/EditProductView.vue',
            }"
            ><button class="edit">Edit</button></router-link
          ><button @click="deleteProduct(product.id)" class="delete">
            Delete
          </button>
        </td>
      </tr>
    </table>
    <div class="loading-div" v-if="loading">
      <span class="loading" v-if="loading">Loading</span>
      <span v-if="loading"
        ><img
          src="https://i.postimg.cc/rFXh4btK/loading-loading-forever.gif"
          alt="loading"
      /></span>
    </div>
    <span v-else></span>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  computed: {
    productsList() {
      return this.$store.state.productsList
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts', 'deleteProduct')
  },
  methods: {
    deleteProduct(productID) {
      this.$store.dispatch('deleteProduct', productID)
    }
  }
};
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
}
table {
  width: 99%;
  margin: 10px auto 10px auto;
  background-color: black;
}
th {
  background-color: rgb(210, 210, 210);
}
td {
  background-color: white;
  width: 10%;
  text-align: center;
  padding: 5px 5px 5px 5px;
}
.delete,
.edit {
  cursor: pointer;
  height: 40px;
  width: 90%;
  margin: 5px 5px 5px 5px;
  border: none;
}
.edit {
  background-color: deepskyblue;
}
.edit:hover {
  background-color: dodgerblue;
}
.edit:active {
  background-color: rgb(0, 84, 219);
}
.delete {
  background-color: rgba(255, 0, 0, 0.642);
}
.delete:hover {
  background-color: rgb(255, 0, 0);
}
.delete:active {
  background-color: rgb(255, 106, 0);
}
.add-product-btn:hover {
  background-color: rgb(76, 252, 0);
}
.add-product-btn:active {
  background-color: rgb(0, 205, 0);
}
.add-product-div {
  justify-content: center;
  align-content: center;
  margin: auto auto 10px auto;
  width: 100%;
  text-align: center;
}
.add-product-btn,
.add-user-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(4, 255, 0, 0.936);
  height: 40px;
}
.add-users-div {
  text-align: right;
  margin-top: 10px;
  margin-right: 10px;
}
h1 {
  text-align: center;
  margin-top: 15px;
}
.loading {
  text-align: center;
  justify-content: center;
  font-size: 30px;
}
.loading-div {
  text-align: center;
  margin-bottom: 10px;
  justify-content: center;
  align-content: center;
}
.loading-div img {
  height: 30px;
}
</style>
