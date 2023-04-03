<template>
  <div class="product-container" v-for="product in products" :key="product.id">
    <img class="product-image" :src="product.imageUrl" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>

</template>

<script>
export default {
  name: "ShoppingCartList",
  props: ['products']
}
</script>
