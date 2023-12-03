<template lang="pug">
  div  
    .input-wrapper.flex
      v-input(label="Название заметки", placeholder="Введите название", v-model="title", counter)
      v-textarea.text(label="Текст заметки", placeholder="Введите текст", v-model="content", counter)
    .footer.w-full
      .info.flex
        v-button.button(label="Добавить")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VInput from "@/components/VInput.vue";
import VTextarea from "@/components/VTextarea.vue";
export default ({
  name: "CreateNoteModal",
  components: { VButton, VInput, VTextarea},
  props: {
    changeModal: {
      type: Function,
      default: () => {}
    },
  },
  data() {
    return {
      title: "",
      content: ""
    }
  },
})
</script>

<style scoped lang="sass">
.input-wrapper
  flex-direction: column
  row-gap: 24px

.info
  justify-content: end
  align-items: center

.footer
  margin-top: 40px

.message > span
  color: var(--grey-color)
  margin-right: 4px

.button
  width: 150px

@media (min-width: 1366px)
  .input-wrapper
    width: 620px
    height: 484px
    & :deep(.textarea)
      height: 244px

@media (max-width: 1366px)
  .input-wrapper
    width: 482px
    height: 282px
    & :deep(.textarea)
      height: 168px

@media (max-width: 768px)
  .input-wrapper
    width: 576px
    height: 408px

@media (max-width: 360px)
  .input-wrapper
    width: 320px
    height: 400px
    row-gap: 16px
  .button
    width: 100%
  .footer
    margin-top: 28px
</style>