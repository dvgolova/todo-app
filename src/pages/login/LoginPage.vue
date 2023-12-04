<template lang="pug">
  .body.flex.h-full.w-full
    .heading.flex
      h1.h1 Мои заметки
      h3.h3 Не забывай о важном, храни его в облаке.
    img.notes-img(src="@/assets/png/notes.png", alt="notes")
</template>

<script>
export default ({
  name: "LoginPage",
})
</script>

<style scoped lang="sass">
.heading
  flex-direction: column
  row-gap: 40px
  align-items: start
  justify-content: center
.body
  flex: 1
  justify-content: space-between
.h1
  color: var(--white-color)
.h3
  color: var(--grey-color)
  width: 394px

@media (min-width: 1366px)
  .notes-img
    width: 898px
    height: 864px
  .heading
    align-items: start
    justify-content: center

@media (max-width: 1366px)
  .notes-img
    width: 626px
    height: 604px

@media (max-width: 768px)
  .body
    flex-direction: column
    padding-top: 40px
    align-items: center
  .heading
    row-gap: 20px
    align-items: center
  .notes-img
    width:  560px
    height: 540px
  .h3
    display: inline-block
    text-align: center
    width: 100%
    height: 96px
  .h1
    display: inline-block
    text-align: center

@media (max-width: 360px)
  .body
    flex-direction: column
    padding-top: 20px
    align-items: center
  .heading
    row-gap: 20px
    align-items: center
  .notes-img
    width:  298px
    height: 286px
  .h3
    display: inline-block
    text-align: center
    width: 100%
    height: 72px
    font-size: 24px
    line-height: 36px
  .h1
    display: inline-block
    text-align: center
    font-size: 60px
    line-height: 64px

</style>
