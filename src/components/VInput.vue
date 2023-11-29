<template lang="pug">
  .wrapper.flex.text-small
    .label(v-if="label") {{label}}
    .input.flex(:style="inputStyle", v-on:click="focusOnInput")
      input(
        :placeholder="placeholder",
        v-on:focus="focused = true",
        v-on:blur="focused = false",
        v-model="internalValue",
        ref="input",
        maxlength="100",
        v-on:input="checkRule"
      )
      .icon.flex.center-align(v-if="icon", v-on:click.stop)
        v-icon(:name="icon", color="var(--green-light-color)")
    .footer.flex
      .error
        span(v-if="!valid && errorMessage") {{errorMessage}}
      .counter {{wordsCounter}}/100
</template>

<script>
import VIcon from "@/components/VIcon.vue";
export default ({
  name: "VInput",
  components: {VIcon},
  props: {
    label: String,
    icon: String,
    disabled: Boolean,
    placeholder: String,
    value: String,
    rule: Function,
    errorMessage: String,
  },
  data() {
    return {
      focused: false,
      valid: true,
    }
  },
  computed: {
    inputStyle() {
      if (this.focused) return {
        border: "2px solid var(--green-color)",
      }
      return {}
    },
    internalValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val)
      }
    },
    wordsCounter() {
      return this.internalValue?.length
    }
  },
  methods: {
    focusOnInput() {
      this.$refs.input.focus()
    },
    checkRule(e) {
      this.valid = this.rule(e.target.value)
    }
  },
})
</script>

<style scoped lang="sass">
.wrapper
  width: 100%
  row-gap: 8px
  flex-direction: column
.label, .counter
  color: var(--grey-color)
.label
  margin-left: 24px
.input
  height: 72px
  width: 100%
  padding: 22px 28px
  justify-content: space-between
  border-radius: 36px
  border: 2px solid var(--white-color)
  background-color: var(--white-color)
  box-sizing: border-box
  cursor: text
  &:hover
    border: 2px solid var(--green-color)
input
  display: flex
  width: 100%
  height: 100%
  padding: 0px 0px
  border: none
  outline: none
  color: var(--dark-color)
  &::placeholder
    color: var(--grey-color)
.error
  color: var(--red-color)
.footer
  justify-content: space-between
  margin: 0 24px
.icon
  margin-left: 12px
  height: 100%
  cursor: pointer
</style>