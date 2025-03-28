<template>
  <Header />
  <MobileMenu />
  <router-view></router-view>
  <Footer />
</template>

<!-- <script>
import Header from './components/Header.vue';
import MobileMenu from './components/MobileMenu.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    MobileMenu,
    Footer,
  },
};
</script> -->

<script setup>
import Header from './components/Header.vue';
import MobileMenu from './components/MobileMenu.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Global styles here */
</style>
