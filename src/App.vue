<template lang="pug">
  div#app
    v-button(label="Вход", icon="login")
    v-button(label="Вход", icon="login", round, disabled)
    v-input(label="Введите значение", placeholder="Введите значение", icon="on-password", v-model="inputValue", :rule="checkValid", errorMessage="Превышено количество символов")
    input(type="password")
</template>

<script>
import VIcon from "@/components/VIcon.vue";
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";
export default {
  name: 'App',
  components: {VIcon, VButton, VInput},
  data() {
    return {
      inputValue: ""
    }
  },
  methods: {
    checkValid(val) {
      return val.length < 10;
    },
  },
}
</script>

<style scoped lang="sass">
  .example
    width: 50px
    height: 50px
</style>

