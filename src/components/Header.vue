<template>
    <header class="primary-header">
        <div class="container">
            <div class="nav-wrapper">
                <div class="nav-logo">
                    <i class="ri-menu-line" id="menu-icon" @click="toggleMenu"></i>
                    <a href="/"><h2 class="bg-primary-200">Pri Figueiredo</h2></a>
                </div>

                <div class="nav-links">
                    <nav>
                        <ul aria-label="primary" role="list" class="nav-list">
                            <li class="nav-item"><a href="#about">About</a></li>
                            <li class="nav-item"><a href="#q&a">Q&A</a></li>
                            <li class="nav-item"><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>    
                </div>

                <div class="nav-btn">
                    <ul aria-label="primary" role="list">
                        <li>
                            <a href="/classes"><button class="access-btn">Classes</button></a>
                        </li>
                    </ul>  
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { useMenu } from '../composables/useMenu';
const { isMenuOpen, toggleMenu } = useMenu();
console.log('Header - isMenuOpen:', isMenuOpen);
</script>

<style scoped>
/* Estilos específicos do Header */
</style>