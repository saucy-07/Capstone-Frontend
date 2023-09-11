import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    productsList: [],
    insertProductStatus: null,
    fetchProductStatus: null,
  },
  getters: {},
  mutations: {
    setProducts(state, productsList) {
      state.productsList = productsList;
    },
    deleteProduct(state, productID) {
      state.productsList = state.productsList.filter(
        (product) => product.id !== productID
      );
    },
    setInsertProductStatus(state, status) {
      state.insertProductStatus = status;
    },
    setFetchProductStatus(sate, status) {
      state.fetchProductStatus = status;
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://capstone-backend-cbw.onrender.com/products"
        );
        this.commit(`setProducts`, response.data.results);
        console.log(response.data.results);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async deleteProduct({ commit }, productID) {
      try {
        await axios.delete(
          `https://capstone-backend-cbw.onrender.com/product/${productID}`
        );
        commit("deleteProduct", productID);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    insertProduct({ commit }, newproduct) {
      axios
        .post("https://capstone-backend-cbw.onrender.com/product", newproduct)
        .then((response) => {
          commit("setInsertProductStatus", response.data.message);
        })
        .catch((error) => {
          console.error(error);
          commit("setInsertProductStatus", "Failed to insert data");
        });
    },
    async fetchProduct({commit}, productID) {
      try {
        const response = await axios.get(`https://capstone-backend-cbw.onrender.com/product/${productID}`);
        commit("setFetchProductStatus", response.data);
      }catch (error) {
        alert(error);
        console.log(error)
      }
    }
  },
  modules: {},
});
