<template lang="pug">
  v-modal(title="Вход в ваш аккаунт", :close="closeModal")
    <template v-slot>
      .input-wrapper.flex
        v-input(label="Email", placeholder="Введите Email", v-model="email")
        v-input(label="Пароль", placeholder="Введите пароль", v-model="password", type="password")
      .footer.w-full
        .info.flex
          .message
            span.text-small У вас нет аккаунта?
            span.text-small Зарегистрируйтесь
          v-button.button(label="Войти")
        .authorization-error.w-full.text-small(v-if="unauthorized") Пользователь с таким логином не найден
    </template>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";
import VModal from "@/components/VModal.vue";
export default ({
  name: "LoginModal",
  components: { VButton, VInput, VModal},
  props: {
    closeModal: {
      type: Function,
      default: () => {}
    },
  },
  data() {
    return {
      email: "",
      password: "",
      unauthorized: false,
    }
  }
})
</script>

<style scoped lang="sass">
.input-wrapper
  flex-direction: column
  row-gap: 24px
.info
  justify-content: space-between
  align-items: center
@media (min-width: 1366px)
  .input-wrapper
    width: 620px
    height: 240px
@media (max-width: 1366px)
  .input-wrapper
    width: 482px
    height: 240px
@media (max-width: 768px)
  .input-wrapper
    width: 576px
    height: 240px
@media (max-width: 360px)
  .input-wrapper
    width: 320px
    height: 240px
    column-gap: 16px
    margin-bottom: 28px
span:first-child
  color: var(--grey-color)
  margin-right: 4px
span:last-child
  color: var(--green-light-color)
  font-family: Montserrat-Bold
  cursor: pointer
.button
  width: 114px
.authorization-error
  border-radius: 24px
  background: rgba(255, 116, 97, 0.10)
  margin-top: 20px
  padding: 8px 20px
  color: var(--red-color)
</style>