<template lang="pug">
  .modal-wrapper.w-full.h-full
    .darkening-layer.w-full.h-full(v-on:click="close")
    .modal.flex
      .button-wrapper(v-on:click="close")
        v-button(icon="close", round)
      .content.flex
        .title.h2(v-if="title") {{title}}
        slot
</template>

<script>
import VButton from "@/components/VButton.vue";
export default ({
  name: "VModal",
  components: { VButton },
  props: {
    title: String,
    close: {
      type: Function,
      default: () => {}
    },
  },
  data() {
    return {
      open: false,
    }
  },
})
</script>

<style scoped lang="sass">
.modal-wrapper
  position: absolute
  z-index: 1000
.darkening-layer
  position: absolute
  opacity: 0.7
  background: var(--dark-color)
.modal
  background-color: var(--dark-middle-color)
  border-radius: 40px
  flex-direction: column
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
.button-wrapper
  position: absolute
  right: 0
  margin-right: 20px
  margin-top: 20px
.content
  flex-direction: column
  row-gap: 40px
.h2
  color: var(--white-color)
  width: 100%
@media (min-width: 1366px)
  .content
    padding: 80px
@media (max-width: 1366px)
  .content
    padding: 56px
  .h2
    width: calc(100% - 10px)
@media (max-width: 768px)
  .content
    row-gap: 40px
    padding: 56px
@media (max-width: 360px)
  .content
    row-gap: 28px
    padding: 24px 16px
  .h2
    font-size: 32px
    line-height: 36px
</style>