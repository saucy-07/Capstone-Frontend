<template>
  <div class="content-wrap">
    <h1>Add Product</h1>
    <form>
      <div class="add-products-div">
        <div class="add-products-inner">
          <div class="input-details-div">
            <div class="input-details-row">
              <label for="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                class="info-input"
                v-model="product.productName"
              />
            </div>
            <div class="input-details-row">
              <label for="gender">Gender</label>
              <input
                type="text"
                id="gender"
                class="info-input"
                v-model="product.gender"
              />
            </div>
            <div class="input-details-row">
              <label for="quantity">Quantity</label>
              <input
                type="int"
                id="quantity"
                class="info-input"
                v-model="product.quantity"
              />
            </div>
            <div class="input-details-row">
              <label for="price">Price</label>
              <input
                type="int"
                id="price"
                class="info-input"
                v-model="product.amount"
              />
            </div>
            <div class="input-details-row">
              <label for="category">Category</label>
              <input
                type="text"
                id="category"
                class="info-input"
                v-model="product.category"
              />
            </div>
            <div class="input-details-row">
              <label for="productUrl">Image URL</label>
              <input
                type="text"
                id="productUrl"
                class="info-input"
                v-model="product.productUrl"
              />
            </div>
          </div>
          <div class="btn-div">
            <button @click="AddProduct()" class="add-product-btn">
              Add Product
            </button>
            <router-link to="/src/views/AdminView.vue">
              <button class="close-btn">Close</button>
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddProductsView",
  data() {
    return {
      product: {
        productName: "",
        gender: "",
        quantity: "",
        amount: "",
        category: "",
        productUrl: "",
      },
    };
  },
  methods: {
    AddProduct() {
      let newproduct = {
        productName: this.product.productName,
        gender: this.product.gender,
        quantity: this.product.quantity,
        amount: this.product.amount,
        category: this.product.category,
        productUrl: this.product.productUrl,
      };
      console.log(newproduct);

      this.$store.dispatch("insertProduct", newproduct);

      alert("New Product Added");
    },
  },
};
</script>

<style scoped>
.content-wrap {
  margin: 5% auto 0 auto;
  min-height: 100vh;
}
.add-products-div {
  margin: auto auto auto auto;
  padding: auto auto auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add-products-inner {
  width: 50%;
  height: 52.5%;
  background: white;
  text-align: center center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding-top: 10px;
}
.input-details-row {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.input-details-div {
  display: flex;
  flex-direction: column;
}
h1 {
  text-align: center;
  padding-bottom: 1%;
}
.close-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 10px 5px;
  width: 100px;
  border: none;

  background-color: orange;
  height: 40px;
}
.close-btn:hover {
  background-color: darkorange;
}
.close-btn:active {
  background-color: rgb(255, 106, 0);
}
.add-product-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 5px 10px auto;
  width: 100px;
  border: none;
  background-color: rgba(4, 255, 0, 0.936);
  height: 40px;
}
.add-product-btn:hover {
  background-color: rgb(76, 252, 0);
}
.add-product-btn:active {
  background-color: rgb(0, 205, 0);
}
.btn-div {
  text-align: center;
}
</style>
