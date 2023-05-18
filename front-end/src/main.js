import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


import { initializeApp } from "firebase/app";

//Configuration to connect to Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfrP7uZhUlcSV1P7xD2Y6sDyzdQ8kSykw",
  authDomain: "techhorizons-16e99.firebaseapp.com",
  projectId: "techhorizons-16e99",
  storageBucket: "techhorizons-16e99.appspot.com",
  messagingSenderId: "528155349507",
  appId: "1:528155349507:web:bed4fe3b8f5b3788ca3436"
};






initializeApp(firebaseConfig);




createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/',
    redirect: '/products',

  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
