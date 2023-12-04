<template lang="pug">
  .note-wrapper.w-full
    header.header.flex
      h4.title {{note?.title}}
      .corner.flex
        v-icon(name="corner")
        .block
    .body.text-normal.w-full {{note?.content}}
    footer.footer.flex
      v-button.delete-button(icon="close", label="Удалить")
</template>

<script>
import VButton from "@/components/VButton.vue";
import VIcon from "@/components/VIcon.vue";
export default ({
  name: "HomeNote",
  components: { VButton, VIcon },
  props: {
    note: Object,
  },
})
</script>

<style scoped lang="sass">
.note-wrapper
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.40)
  color: var(--white-color)
  height: auto
:is(.body, .title, .block, .footer)
  background-color: var(--green-light-color)

.title
  padding: 20px 56px 20px 28px
  flex: 1
  border-top-left-radius: 12px
.body
  padding: 20px 28px
.footer
  border-bottom-left-radius: 12px
  border-bottom-right-radius: 12px
  justify-content: end
  padding: 8px
.delete-button
  width: 164px
.corner
  flex-direction: column
  width: 40px
.block
  flex: 1

@media (max-width: 360px)
  .text-normal
    font-size: 16px
    line-height: 24px
  .title
    font-size: 20px
    line-height: 26px
</style>
