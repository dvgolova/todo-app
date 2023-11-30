import VueRouter from "vue-router"
import HomePage from "@/pages/HomePage.vue"
import NotesPage from "@/pages/NotesPage.vue"

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/notes",
      name: "notes",
      component: NotesPage,
    }
  ]
})