import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    productsList: [],
  },
  getters: {
  },
  mutations: {
    setProducts(state, productsList) {
      state.productsList = productsList;
    },
    deleteProduct(state, productID) {
      state.productsList = state.productsList.filter(product => product.id !== productID);
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('https://capstone-backend-cbw.onrender.com/products');
        this.commit(`setProducts`, response.data.results)
        console.log(response.data.results);
      }catch (error) {
        alert(error);
        console.log(error)
      }
    },
    async deleteProduct({commit}, productID) {
      try {
        await axios.delete(`https://capstone-backend-cbw.onrender.com/product/${productID}`);
        commit('deleteProduct', productID);
      }catch (error) {
        alert(error);
        console.log(error)
      }
    }
  },
  modules: {
  }
})
