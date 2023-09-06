import { createStore } from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    productsList: []
  },
  getters: {
    getProducts: (state) => state.productsList,
  },
  mutations: {
    SET_PRODUCTS(state, productsList) {
      state.productsList = productsList;
    }
  },
  actions: {
    async fetchProducts({commit}) {
      try {
        const data = await axios.get('https://capstone-backend-cbw.onrender.com/products');
        commit("SET_PRODUCTS", data.data);
      }catch (error) {
        alert(error);
        console.log(error)
      }
    },
  },
  modules: {
  }
})
