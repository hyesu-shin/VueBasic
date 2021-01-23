import Vue from 'vue';
import VueRouter from "vue-router";
import TodoLocalStorage from "../views/TodoLocalStorage.vue"
import Home from "../views/Home.vue"
import TodoCookies from "../views/TodoCookies.vue"
import BoardLocalStorage from "../views/BoardLocalStorage.vue"

import List from "../components/Board/List.vue"
import New from "../components/Board/New.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/todolocalstorage',
        name:'TodoLocalStorage',
        component: TodoLocalStorage
    },
    {
        path: '/todocookies',
        name: 'TodoCookies',
        component: TodoCookies
    },
    {
        path: '/boardlocalstorage',
        name: 'BoardLocalStorage',
        component: BoardLocalStorage,
        children: [
            {
                path: '/',
                component: List
            },
            {
                path: 'new',
                component: New
            }
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;