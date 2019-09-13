<template>
    <div>
        <div v-for="(laptop,id) in getlaptop" :key="laptop.id">
            <Product :product="laptop"></Product>
        </div>
    </div>
</template>

<script>
  import Product from './Product';
  export default {
    name: "Laptop",
    computed: {
      getlaptop() {
        return this.$store.getters.getlaptop;
      }
    },
    components:{
      Product
    }
  };
</script>

<style scoped>

</style>