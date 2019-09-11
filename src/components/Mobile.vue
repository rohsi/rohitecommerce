<template>
    <div>

    <Product :product="product"></Product>
    </div>


</template>

<script>
    import Product from './Product';
  export default {


    computed: {
      getmobiles() {
        return this.$store.getters.getmobiles;
      }
    },
    components:{
      Product
    }
  };
</script>

<style scoped>

</style>