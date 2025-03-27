<template>
    <div class="menu" :class="{ active: isMenuOpen }">
        <div class="menu-links">
            <ul aria-label="primary" role="list">
                <li>
                    <a href="#about"><h2>About <i class="ri-arrow-right-line"></i></h2></a>
                </li>
                <li>
                    <a href="#q&a"><h2>Q&A <i class="ri-arrow-right-line"></i></h2></a>
                </li>
                <li>
                    <a href="#contact"><h2>Contact <i class="ri-arrow-right-line"></i></h2></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useMenu } from '../composables/useMenu';
import { ref, watchEffect } from 'vue';

const { isMenuOpen } = useMenu();

watchEffect(() => {
  console.log('MobileMenu - isMenuOpen changed:', isMenuOpen.value);
});
</script>

<style scoped>
/* Estilos específicos do MobileMenu */
</style>