import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue';
//импорт функции для создания асинхронного компонента
import App from './App.vue'
import "./theme.css"

let app = createApp(App);
app.component('async-component',defineAsyncComponent(() => {
    return import("./AppAsyncComponent.vue");
}));
//регистрация асинхронного компонента
app.mount('#app')
