<template>
    <div>
    <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">{{product.price}}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
    </div>
    </div>
</template>

<script>

  export default {
    props:['product'],
    name: "Product"
  };
</script>

<style scoped>

</style>