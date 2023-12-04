<template lang="pug">
  .page.flex.h-full.w-full
    v-button.add-button.absolute(icon="add", round, @click.native="openModal")
    .cell.w-full(v-for="note of notes", :key="note.id", :note="note")
      home-note(:note="note")
</template>

<script>
import VButton from "@/components/VButton.vue";
import HomeNote from "@/pages/home/components/HomeNote.vue";
export default ({
  name: "HomePage",
  components: { VButton, HomeNote },
  props: {
    openModal: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      notes: [
        {
          id: 0,
          title: "Заголовок",
          content: "А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных."
        },
        {
          id: 1,
          title: "Заголовок",
          content: "Не следует, однако, забывать, что базовый вектор развития предопределяет высокую востребованность позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — повышение уровня гражданского сознания требует анализа переосмысления внешнеэкономических политик."
        },
        {
          id: 2,
          title: "Заголовок",
          content: "А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных."
        },
        {
          id: 3,
          title: "Пример заголовока заметки в две строчки",
          content: "А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных."
        },
        {
          id: 4,
          title: "Заголовок",
          content: "А также явные признаки победы институционализации могут быть объединены в целые кластеры себе подобных."
        },
      ]
    }
  },
})
</script>

<style scoped lang="sass">
.page
  flex: 1
  overflow-y: auto
  display: grid
  padding: 40px 0
  &::-webkit-scrollbar
    width: 0
  // &::-moz-scrollbar
  //   width: 0
  scrollbar-width: none
.add-button
  position: fixed
  bottom: 40px
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.60)

@media (min-width: 1366px)
  .page
    grid-template-columns: repeat(3, 1fr)
    gap: 40px
  .add-button
    right: 40px

@media (max-width: 1366px)
  .page
    gap: 20px
  .add-button
    right: 12px
  
@media (max-width: 768px)
  .add-button
    right: 8px

@media (max-width: 360px)
  .page
    padding: 20px 0
</style>
