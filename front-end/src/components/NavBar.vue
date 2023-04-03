<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
      <div class="logo-wrap">
        <img class="logo-size" :src=logo2 />
      </div>
    </router-link>


  </div>
</template>

<script>

import logo2 from '../assets/logo2.png';

export default {
  name: "NavBar",
  props: ["user"],
  data() {
    return {
      logo2,
    }
  },
  
}
</script>