import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style.css';
import { useMenu } from './composables/useMenu';

const app = createApp(App);
app.use(router);

const { isMenuOpen, toggleMenu } = useMenu(); 

app.provide('isMenuOpen', isMenuOpen); 
app.provide('toggleMenu', toggleMenu); 

app.mount('#app');
