<template lang="pug">
  .page-wrapper.h-full.w-full.flex
    .header.flex.center-align
      img.logo(src="@/assets/svg/logo.svg", alt="logo")
      .log-btn(v-on:click="openModal")
        v-button(icon="login", label="Вход")
    .body.flex.h-full.w-full
      .heading.flex
        .h1 Мои заметки
        .h3 Не забывай о важном, храни его в облаке.
      img.notes-img(src="@/assets/png/notes.png", alt="notes")
    login-modal(v-if="open", :closeModal="closeModal")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VIcon from "@/components/VIcon.vue";
import VModal from "@/components/VModal.vue";
import LoginModal from "@/pages/home/components/LoginModal.vue"
export default ({
  name: "HomePage",
  components: { VButton, VIcon, VModal, LoginModal},
  data() {
    return {
      open: false,
    }
  },
  methods: {
    closeModal() {
      this.open = false;
    },
    openModal() {
      this.open = true;
    },
  }
})
</script>

<style scoped lang="sass">
.page-wrapper
  flex-direction: column
  position: relative
.header
  justify-content: space-between
.heading
  flex-direction: column
  row-gap: 40px
  align-items: start
  justify-content: center
.body
  flex: 1
  justify-content: space-between
.h1
  color: var(--white-color)
.h3
  color: var(--grey-color)
  width: 394px

@media (min-width: 1366px)
  .header
    padding: 40px 160px
  .body
    padding: 0 160px
  .notes-img
    width: 898px
    height: 864px
  .heading
    align-items: start
    justify-content: center

@media (max-width: 1366px)
  .header
    padding: 20px 80px
  .body
    padding: 0 80px
  .notes-img
    width: 626px
    height: 604px

@media (max-width: 768px)
  .header
    padding: 20px 40px
  .body
    flex-direction: column
    padding: 40px 40px 0 40px
    align-items: center
  .heading
    row-gap: 20px
    align-items: center
  .notes-img
    width:  560px
    height: 540px
  .h3
    display: inline-block
    text-align: center
    width: 100%
    height: 96px
  .h1
    display: inline-block
    text-align: center

@media (max-width: 360px)
  .header
    padding: 20px 20px
  .body
    flex-direction: column
    padding: 20px 20px 0 20px
    align-items: center
  .heading
    row-gap: 20px
    align-items: center
  .notes-img
    width:  298px
    height: 286px
  .h3
    display: inline-block
    text-align: center
    width: 100%
    height: 72px
    font-size: 24px
    line-height: 36px
  .h1
    display: inline-block
    text-align: center
    font-size: 60px
    line-height: 64px

.log-btn
  width: 144px

@media (max-width: 1920px) and (min-width: 360px)
  .logo
    width: 180px
    height: 50px
@media (max-width: 360px)
  .logo
    width: 154px
    height: 36px

</style>
