<template>
  <div class="nav-bar">
    <router-link to="/products" class="products-link">
      <div class="logo-wrap">
        <img class="logo-size" :src=logo2 />
      </div>
    </router-link>

    <div class="nav-buttons-wrap">
      <button @click="signOut" v-if="user">Sign Out</button>
      <router-link to="/cart" >
      <button>Shopping Cart</button>
      </router-link>
    </div>

  </div>
</template>

<script>
import { getAuth, signOut} from 'firebase/auth';
import logo2 from '../assets/logo2.png';

export default {
  name: "NavBar",
  props: ["user"],
  data() {
    return {
      logo2,
    }
  },
  methods: {
    signOut() {
      const auth = getAuth();
      signOut(auth);
    }
  }
}
</script>