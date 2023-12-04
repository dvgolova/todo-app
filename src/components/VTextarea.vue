<template lang="pug">
  .wrapper.flex.text-small
    .label(v-if="label") {{label}}
    .textarea.flex(:style="{...textareaFocusStyle, ...textareaHeightStyle}", v-on:click="focusOnInput")
      textarea(
        :placeholder="placeholder",
        v-on:focus="focused = true",
        v-on:blur="focused = false",
        v-model="internalValue",
        ref="input",
        maxlength="500",
        v-on:input="checkRule"
      )
      .icon.flex.center-align(v-if="icon", v-on:click.stop)
        v-icon(:name="icon", color="var(--green-light-color)")
    .footer.flex
      .error
        span(v-if="!valid && errorMessage") {{errorMessage}}
      .counter {{wordsCounter}}/500
</template>

<script>
import VIcon from "@/components/VIcon.vue";
export default ({
  name: "VTextarea",
  components: {VIcon},
  props: {
    label: String,
    icon: String,
    placeholder: String,
    value: String,
    rule: Function,
    errorMessage: String,
    height: Number,
  },
  data() {
    return {
      focused: false,
      valid: true,
    }
  },
  computed: {
    textareaFocusStyle() {
      if (this.focused) return {
        border: "2px solid var(--green-color)",
      }
      return {}
    },
    textareaHeightStyle() {
      if (this.height) return {
        height: this.height + "px"
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
.textarea
  width: 100%
  height: 280px
  padding: 16px 28px
  border-radius: 36px
  border: 2px solid var(--white-color)
  background-color: var(--white-color)
  box-sizing: border-box
  cursor: text
  &:hover
    border: 2px solid var(--green-color)
textarea
  display: flex
  width: 100%
  height: 100%
  padding: 0px 0px
  border: none
  outline: none
  resize: none
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