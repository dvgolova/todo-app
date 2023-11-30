import VueRouter from "vue-router"
import HomePage from "@/pages/home/HomePage.vue"
import NotesPage from "@/pages/notes/NotesPage.vue"

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