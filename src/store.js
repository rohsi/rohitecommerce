import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {id: 1, name: "phone", price: 123,description:'mobile'},
      {id: 2, name: "phone2", price: 67,description: 'laptop'},
      {id: 3, name: "phone3", price: 94,description:'mobile'},
      {id: 4, name: "phone4", price: 106,description:'mobile'}
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    products: state => {
      return state.products;
    },
     getmobiles:state => {
      var productsmobile=state.products.filter(product =>
      {
        return product.description='mobile';
      });

     }
  }
});
