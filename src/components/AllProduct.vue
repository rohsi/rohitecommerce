<template>
    <div>
        <div class="col-lg-4 col-md-6" v-for="product in products" :key="product.id">
    <Product :product="product"></Product>
    </div>
    </div>
</template>

<script>
    import Product from './Product';
  export default {

    computed:{
      products(){
        return this.$store.getters.products;
      }
    },
    components:{
      Product
    }
  }
</script>

<style scoped>

</style>
