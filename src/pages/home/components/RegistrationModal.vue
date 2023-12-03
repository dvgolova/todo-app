<template lang="pug">
  div  
    .input-wrapper.flex
      v-input(label="Email", placeholder="Введите Email", v-model="email")
      v-input(label="Пароль", placeholder="Введите пароль", v-model="password", type="password")
      v-input(label="Пароль ещё раз", placeholder="Введите пароль", v-model="password", type="password")
    .footer.w-full
      .info.flex
        .message.flex
          span.text-small У вас есть аккаунт?
          button.login-button.text-small-bold(v-on:click="changeModal('login')") Войти
        v-button.button(label="Зарегистрироваться")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";
import VModal from "@/components/VModal.vue";
export default ({
  name: "RegistrationModal",
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
      copiedPassword: "",
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
  width: 268px

.authorization-error
  border-radius: 24px
  background: rgba(255, 116, 97, 0.10)
  margin-top: 20px
  padding: 8px 20px
  color: var(--red-color)

@media (min-width: 1366px)
  .input-wrapper
    width: 620px
    height: 372px
@media (max-width: 1366px)
  .input-wrapper
    width: 482px
    height: 372px
  .message
    flex-direction: column
    align-items: start

@media (max-width: 768px)
  .input-wrapper
    width: 576px
    height: 372px
  .message
    flex-direction: row
@media (max-width: 360px)
  .input-wrapper
    width: 320px
    height: 356px
    row-gap: 16px
    margin-bottom: 28px
  .footer
    margin-top: 0
  .text-small, .text-small-bold
    font-size: 14px
    line-height: 24px
  .info
    flex-direction: column
    row-gap: 20px
  .message
    order: 2
  .button
    width: 100%
</style>