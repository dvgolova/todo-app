<template lang="pug">
  div  
    .input-wrapper.flex
      v-input(label="Email", placeholder="Введите Email", v-model="email")
      v-input(label="Пароль", placeholder="Введите пароль", v-model="password", type="password")
    footer.footer.w-full
      .info.flex
        .message.flex
          span.text-small У вас нет аккаунта?
          button.login-button.text-small-bold(v-on:click="changeModal('registration')") Зарегистрируйтесь
        v-button.button(label="Войти")
      .authorization-error.w-full(v-if="unauthorized")
        span.text-small Пользователь с таким логином не найден
</template>

<script>
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";
import VModal from "@/components/VModal.vue";
export default ({
  name: "LoginModal",
  components: { VButton, VInput, VModal},
  props: {
    changeModal: {
      type: Function,
      default: () => {}
    },
  },
  data() {
    return {
      email: "",
      password: "",
      unauthorized: true,
    }
  },
})
</script>

<style scoped lang="sass">
.input-wrapper
  flex-direction: column
  row-gap: 24px
.info
  justify-content: space-between
  align-items: center
.footer
  margin-top: 40px

.message > span
  color: var(--grey-color)
  margin-right: 4px

.login-button
  color: var(--green-light-color)
  cursor: pointer
  background-color: inherit
  border: none
  padding: 0

.button
  width: 114px

.authorization-error
  border-radius: 24px
  background: rgba(255, 116, 97, 0.10)
  margin-top: 20px
  padding: 8px 20px
  color: var(--red-color)

@media (min-width: 1366px)
  .input-wrapper
    width: 620px
    height: 240px
@media (max-width: 1366px)
  .input-wrapper
    width: 482px
    height: 240px
  .message
    flex-direction: column

@media (max-width: 768px)
  .input-wrapper
    width: 576px
    height: 240px
  .message
    flex-direction: row
@media (max-width: 360px)
  .input-wrapper
    width: 320px
    height: 232px
    row-gap: 16px
    margin-bottom: 28px
  .footer
    margin-top: 0
  .text-small, .text-small-bold
    font-size: 14px
    line-height: 24px
  .info
    flex-direction: column
    row-gap: 12px
  .message
    order: 2
  .button
    width: 100%
  .authorization-error
    margin-top: 12px
</style>