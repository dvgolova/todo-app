import VueRouter from "vue-router"
import LoginPage from "@/pages/login/LoginPage.vue"
import HomePage from "@/pages/home/HomePage.vue"

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    }
  ]
})