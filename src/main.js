import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
// import LandingPage from './components/LandingPage.vue';
import KeyboardPractice from './components/KeyboardPractice.vue';
import MousePractice from './components/MousePractice.vue';
import SpellingGame from './components/SpellingGame.vue';

// import RandomShape from './components/RandomShape.vue';

const routes = [
  { path: '/', component: null },
  { path: '/keyboard-practice', component: KeyboardPractice },
  { path: '/mouse-practice', component: MousePractice },
  { path: '/spelling-game', component: SpellingGame },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

const app = createApp(App);
app.use(router);
app.mount('#app');
