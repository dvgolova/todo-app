<template lang="pug">
  header.header.flex.center-align
    v-icon(color="var(--green-light-color)", v-if="smallScreen && $route.path === '/home'")
    img.logo(src="@/assets/svg/logo.svg", alt="logo", v-else)
    v-button.login-button(icon="login", label="Вход", @click.native="openModal", v-if="$route.path === '/'")
    .user-info.flex(v-else)
      .email.text-small {{user?.email}}
      v-button.out-button(:icon="smallScreen ? 'user-small' : 'user'", round, :style="outButtonSize", @click.native="openMenu")
        v-menu(:options="['Выйти']", v-if="open", :close-menu="closeMenu", :open="open")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VIcon from "@/components/VIcon.vue";
import VMenu from "@/components/VMenu.vue";
export default {
  name: "TheHeader",
  components: { VButton, VIcon, VMenu },
  props: {
    smallScreen: Boolean,
    openModal: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      user: {
        email: "e-mail@mail.mail и ещё символы",
      },
      open: false
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
    openMenu() {
      this.open = true
    },
    closeMenu() {
      this.open = false
    },
  },
  
}
</script>
<style lang="sass" scoped>
.email
  cursor: default
.header
  justify-content: space-between

.user-info
  align-items: center
  color: var(--white-color)
  column-gap: 12px

.login-button
  width: 144px

.out-button
  position: relative
  background-color: var(--dark-middle-color)
  &:hover
    background-color: var(--dark-middle-color)
  &:active
    background-color: var(--dark-middle-color)

@media (min-width: 1366px)
  .header
    padding: 40px 0

@media (max-width: 1366px)
  .header
    padding: 20px 0

@media (max-width: 768px)
  .header
    padding: 20px 0

@media (max-width: 1920px) and (min-width: 360px)
  .logo
    width: 180px
    height: 50px

@media (max-width: 360px)
  .header
    padding: 20px 0
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