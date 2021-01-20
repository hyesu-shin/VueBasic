import Vue from 'vue';
import VueRouter from "vue-router";
import TodoLocalStorage from "./views/TodoLocalStorage.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/localstorage',
        name:'LocalStorage',
        components: TodoLocalStorage
    }
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;