import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from "../views/Main/"
import Task from "../views/Task/"
import Finances from "../views/Finances/"


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  },
  {
    path: '/finances',
    name: 'Finances',
    component: Finances
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
