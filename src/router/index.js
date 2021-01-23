import Vue from 'vue';
import VueRouter from "vue-router";
import TodoLocalStorage from "../views/TodoLocalStorage.vue"
import Home from "../views/Home.vue"
import TodoCookies from "../views/TodoCookies.vue"
import BoardLocalStorage from "../views/BoardLocalStorage.vue"

import BoardList from "../components/Board/BoardList.vue"
import BoardNew from "../components/Board/BoardNew.vue"

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
                component: BoardList
            },
            {
                path: 'new',
                component: BoardNew
            }
        ]
    }
]

const router = new VueRouter({
    mode:'history',
    routes
});

export default router;