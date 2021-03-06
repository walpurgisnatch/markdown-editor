import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import markdown from './directives/markdown';

const app = createApp(App)

app.directive('markdown', markdown)

app.mount('#app')