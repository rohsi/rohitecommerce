<template>
    <div>
        <div v-for="(mobile,id) in getmobiles" :key="mobile.id">
            <Product :product="mobile"></Product>
        </div>
    </div>
</template>

<script>
    import Product from './Product';
  export default {
    name: "Mobile",
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