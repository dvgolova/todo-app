<template lang="pug">
  button.btn.flex.center-align(:class="{round: round, default: !round}", :disabled="disabled")
    .icon.flex.center
      v-icon(:name="icon", color="var(--white-color)")
    .label.text-normal(v-if="!round") {{label}}
</template>

<script>
import VIcon from "@/components/VIcon.vue";
export default ({
  name: "VButton",
  components: {VIcon},
  props: {
    label: String,
    icon: String,
    round: Boolean,
    disabled: Boolean
  },
})
</script>

<style scoped lang="sass">
.btn
  height: 56px
  background-color: var(--green-light-color)
  border: none
  &:hover
    background-color: var(--green-middle-color)
  &:disabled
    background-color: var(--grey-color)
    pointer-events: none
  &:active
    background-color: var(--green-dark-color)
.round
  border-radius: 9999px
  width: 56px
.default
  width: 100%
  border-radius: 32px
  column-gap: 12px

.label
  color: var(--white-color)
.icon
  height: 32px
  width: 32px
</style>