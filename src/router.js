import Vue from "vue";
import Router from "vue-router";
import Mobile from './components/Mobile';
import AllProduct from './components/AllProduct';
import Navbar from "./components/Navbar";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component:Navbar
    },
    {
      path:'/allproduct',
      component:AllProduct
    },
  ]
});
