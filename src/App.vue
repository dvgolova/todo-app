<template lang="pug">
  #app
    v-modal(:title="currentModal?.title", :close="closeModal", v-if="open")
      <template v-slot>
        component(v-bind:is="currentModal?.component", :changeModal="changeModal")
      </template>
    .page-wrapper.h-full.w-full.flex
      .header.flex.center-align
        v-icon(color="var(--green-light-color)", v-if="smallScreen && $route.path === '/home'")
        img.logo(src="@/assets/svg/logo.svg", alt="logo", v-else)
        v-button.login-button(icon="login", label="Вход", @click.native="openModal", v-if="$route.path === '/'")
        .user-info.flex(v-else)
          .email.text-small {{user?.email}}
          v-button.out-button(:icon="smallScreen ? 'user-small' : 'user'", round, :style="outButtonSize")
      router-view(:openModal="openModal")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VModal from "@/components/VModal.vue";
import VIcon from "@/components/VIcon.vue";
import LoginModal from "@/pages/login/components/LoginModal.vue";
import RegistrationModal from "@/pages/login/components/RegistrationModal.vue";
import CreateNoteModal from "@/pages/home/components/CreateNoteModal.vue";
//TODO семантика p, h, вынести header
export default {
  name: "App",
  components: { VButton, VModal, LoginModal, RegistrationModal, VIcon, CreateNoteModal },
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
      user: {
        email: "e-mail@mail.mail и ещё символы",
      },
      smallScreen: false,
    }
  },
  computed: {
    outButtonSize() {
      if (this.smallScreen) return {
        width: "36px",
        height: "36px",
      }
      return {}
    },
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
    console.log(this.currentModal)
  }
}
</script>
<style lang="sass" scoped>
.page-wrapper
  flex-direction: column
  position: relative

.header
  justify-content: space-between

.user-info
  align-items: center
  color: var(--white-color)
  column-gap: 12px

.login-button
  width: 144px

.out-button
  background-color: var(--dark-middle-color)
  &:hover
    background-color: var(--dark-middle-color)
  &:active
    background-color: var(--dark-middle-color)

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
  .email
    width: 216px
    height: 24px
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
  .text-small
    font-size: 14px
    line-height: 24px
</style>

