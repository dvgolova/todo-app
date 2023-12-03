<template lang="pug">
  #app
    v-modal(:title="currentModal?.title", :close="closeModal", v-if="open")
      <template v-slot>
        component(v-bind:is="currentModal?.component", :changeModal="changeModal")
      </template>
    .page-wrapper.h-full.w-full.flex
      .header.flex.center-align
        img.logo(src="@/assets/svg/logo.svg", alt="logo")
        .log-btn
          v-button(icon="login", label="Вход", @click.native="openModal")
      router-view
</template>

<script>
import VButton from "@/components/VButton.vue";
import VModal from "@/components/VModal.vue";
import LoginModal from "@/pages/home/components/LoginModal.vue";
import RegistrationModal from "@/pages/home/components/RegistrationModal.vue"
export default {
  name: "App",
  components: { VButton, VModal, LoginModal, RegistrationModal },
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
        }
      ],
      currentModal: {},
    }
  },
  methods: {
    closeModal() {
      this.open = false;
      //this.changeModal(this.$route.path === "/" ? "login" : "out")
      this.currentModal = this.modals[0]
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
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.page-wrapper
  flex-direction: column
  position: relative

.header
  justify-content: space-between

.log-btn
  width: 144px

@media (min-width: 1366px)
  .header
    padding: 40px 0
  .page-wrapper
    padding: 0 160px

@media (max-width: 1366px)
  .header
    padding: 20px 0
  .page-wrapper
    padding: 0 80px

@media (max-width: 768px)
  .header
    padding: 20px 0
  .page-wrapper
    padding: 0 40px

@media (max-width: 1920px) and (min-width: 360px)
  .logo
    width: 180px
    height: 50px

@media (max-width: 360px)
  .header
    padding: 20px 0
  .page-wrapper
    padding: 0 20px
  .logo
    width: 154px
    height: 36px
</style>

