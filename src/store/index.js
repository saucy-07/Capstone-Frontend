import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    usersList: [],
    productsList: [],
    insertUserStatus: null,
    insertProductStatus: null,
    fetchProductStatus: null,
  },
  getters: {},
  mutations: {
    setUsers(state, usersList) {
      state.usersList = usersList;
    },
    setProducts(state, productsList) {
      state.productsList = productsList;
    },
    deleteProduct(state, productID) {
      state.productsList = state.productsList.filter(
        (product) => product.id !== productID
      );
    },
    setInsertUserStatus(state, status) {
      state.insertUserStatus = status;
    },
    setInsertProductStatus(state, status) {
      state.insertProductStatus = status;
    },
    setFetchProductStatus(sate, status) {
      state.fetchProductStatus = status;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://capstone-backend-cbw.onrender.com/users"
        );
        this.commit(`setUsers`, response.data.results);
        console.log(response.data.results);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
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
    insertUser({ commit }, newuser) {
      axios
        .post("https://capstone-backend-cbw.onrender.com/register", newuser)
        .then((response) => {
          commit("setInsertUserStatus", response.data.message);
        })
        .catch((error) => {
          console.log(error);
          commit("setInsertUserStatus", "Failed to insert data");
        });
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
    async fetchProduct({ commit }, productID) {
      try {
        const response = await axios.get(
          `https://capstone-backend-cbw.onrender.com/product/${productID}`
        );
        commit("setFetchProductStatus", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  modules: {},
});
