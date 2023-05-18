<template>

  <NavBar :user="user"/>
  <div class="page-wrap">

      <router-view :user="user"></router-view>
  </div>

</template>

<script>
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import NavBar from '@/components/NavBar.vue'


export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return{
      user: null,
    }
  },
  // centralized way to check if logged in our not (Because can pass the user object down to any of the pages with props)
  created() {
    const auth = getAuth();
   
    onAuthStateChanged(auth, user => {
      this.user = user
    });
  }
};
</script> 
