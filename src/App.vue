<template lang="pug">
  #app
    v-modal(:title="currentModal?.title", :close="closeModal", v-if="open")
      <template v-slot>
        component(v-bind:is="currentModal?.component", :change-modal="changeModal")
      </template>
    .page-wrapper.h-full.w-full.flex
      the-header(:open-modal="openModal", :small-screen="smallScreen")
      router-view(:open-modal="openModal")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VModal from "@/components/VModal.vue";
import VIcon from "@/components/VIcon.vue";
import LoginModal from "@/pages/login/components/LoginModal.vue";
import RegistrationModal from "@/pages/login/components/RegistrationModal.vue";
import CreateNoteModal from "@/pages/home/components/CreateNoteModal.vue";
import TheHeader from "@/components/TheHeader.vue";
//TODO семантика p, h
export default {
  name: "App",
  components: { VButton, VModal, LoginModal, RegistrationModal, VIcon, CreateNoteModal, TheHeader },
  data() {
    return {
      open: false,
      modals: [
        {
          component: "login-modal",
          id: "login",
          title: "Вход в ваш аккаунт",
        },
        {
          component: "registration-modal",
          id: "registration",
          title: "Регистрация",
        },
        {
          component: "create-note-modal",
          id: "create-note",
          title: "Добавление заметки",
        },
      ],
      currentModal: {},
      smallScreen: false,
    }
  },
  methods: {
    closeModal() {
      this.open = false;
      this.changeModal(this.$route.path === "/" ? "login" : "create-note")
    },
    openModal() {
      this.open = true;
    },
    changeModal(componentName) {
      this.currentModal = this.modals.find(({id}) => id === componentName);
    }, 
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler(value) {
        if (value === "/") this.currentModal = this.modals[0];
        else this.currentModal = this.modals[2];
      }
    }
  },
  mounted() {
    this.smallScreen = document.getElementById("app").offsetWidth === 360;
  }
}
</script>
<style lang="sass" scoped>
.page-wrapper
  flex-direction: column
  position: relative

@media (min-width: 1366px)
  .page-wrapper
    padding: 0 160px

@media (max-width: 1366px)
  .page-wrapper
    padding: 0 80px

@media (max-width: 768px)
  .page-wrapper
    padding: 0 40px

@media (max-width: 360px)
  .page-wrapper
    padding: 0 20px
</style>

