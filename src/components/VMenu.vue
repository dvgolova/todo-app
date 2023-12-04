<template lang="pug">
  .menu-wrapper.absolute.flex(v-click-outside="closeMenu")
    .corner.flex
      v-icon(name="corner-menu")
    #menu-list.list.text-small-bold
      ul
        li.option(v-for="option of options", :key="option", @click.stop="closeMenu") {{option}} 
</template>

<script>
import VIcon from "@/components/VIcon.vue";
import { clickOutside } from "@/shared/clickOutside.js";
export default ({
  name: "VMenu",
  components: { VIcon },
  props: {
    options: Array,
    closeMenu: {
      type: Function,
      default: () => {}
    },
    open: Boolean,
  },
  directives: {
    clickOutside
  },
})
</script>

<style scoped lang="sass">
.menu-wrapper
  flex-direction: column
  top: 68px
  right: 0
.list
  padding: 40px
  background-color: var(--dark-middle-color)
  border-radius: 12px
.corner
  height: 9px
  padding: 0 20px
  justify-content: end
.option
  cursor: pointer
  color: var(--green-light-color)
@media (max-width: 360px)
  .menu-wrapper
    flex-direction: column
    top: 48px
    right: 0
  .corner
    padding: 0 10px
</style>