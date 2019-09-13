<template>
  <div class="hello">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><router-link to='/allproduct'> AllProducts</router-link></a>

      <a class="navbar-brand" href="#"><router-link to='/mobile'> Mobile</router-link></a>
        <a class="navbar-brand" href="#"><router-link to='/laptop'> Laptop</router-link></a>

        <button type="button" class="btn btn-primary btn-sm">Addtocart</button>
    </nav>


  </div>
</template>

<script>
export default {
  name: "Navbar"

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



