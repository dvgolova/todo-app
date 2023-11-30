<template lang="pug">
  svg(v-if="name === 'login'" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(d="M6.3079 4.54487C5.90926 4.92711 5.89596 5.56013 6.2782 5.95877C6.66044 6.35741 7.29347 6.3707 7.6921 5.98846L6.3079 4.54487ZM7.6921 28.0115C7.29347 27.6293 6.66044 27.6426 6.2782 28.0412C5.89596 28.4399 5.90926 29.0729 6.3079 29.4551L7.6921 28.0115ZM1 16C0.447715 16 0 16.4477 0 17C0 17.5523 0.447715 18 1 18V16ZM23 17L23.7071 17.7071C24.0976 17.3166 24.0976 16.6834 23.7071 16.2929L23 17ZM16.2929 22.2929C15.9024 22.6834 15.9024 23.3166 16.2929 23.7071C16.6834 24.0976 17.3166 24.0976 17.7071 23.7071L16.2929 22.2929ZM17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929C15.9024 10.6834 15.9024 11.3166 16.2929 11.7071L17.7071 10.2929ZM32 17C32 25.3158 25.4872 32 17.5227 32V34C26.6539 34 34 26.3573 34 17H32ZM17.5227 2C25.4872 2 32 8.68416 32 17H34C34 7.64273 26.6539 0 17.5227 0V2ZM7.6921 5.98846C10.2781 3.50887 13.7316 2 17.5227 2V0C13.1867 0 9.2448 1.72879 6.3079 4.54487L7.6921 5.98846ZM17.5227 32C13.7316 32 10.2781 30.4911 7.6921 28.0115L6.3079 29.4551C9.2448 32.2712 13.1867 34 17.5227 34V32ZM1 18H23V16H1V18ZM22.2929 16.2929L16.2929 22.2929L17.7071 23.7071L23.7071 17.7071L22.2929 16.2929ZM23.7071 16.2929L17.7071 10.2929L16.2929 11.7071L22.2929 17.7071L23.7071 16.2929Z" :fill="color")
  svg(v-else-if="name === 'close'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(d="M1 1L17 17M17 1L1 17" :stroke="color" stroke-width="2" stroke-linecap="round" fill="white")
  svg(v-else-if="name === 'add'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(d="M1 9H17M9 1L9 17" :stroke="color" stroke-width="2" stroke-linecap="round" fill="white")
  svg(v-else-if="name === 'password'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
    rect(x="1" y="8.5" width="16" height="10" rx="2" :stroke="color" stroke-width="2")
    circle(cx="9" cy="13.5" r="2" :stroke="color" stroke-width="2")
    path(d="M4 4.5C4 2.84315 5.34315 1.5 7 1.5H11C12.6569 1.5 14 2.84315 14 4.5V8.5H4V4.5Z" :stroke="color" stroke-width="2")
  svg(v-else-if="name === 'email'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg")
    rect(x="1" y="1" width="16" height="14" rx="3" :stroke="color" stroke-width="2")
    path(d="M4 5L7.75061 8.00049C8.48105 8.58484 9.51895 8.58484 10.2494 8.00049L14 5" :stroke="color" stroke-width="2")
  svg(v-else-if="name === 'on-password'" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(d="M17 7C17 8.15478 16.2206 9.64926 14.7228 10.9006C13.2537 12.128 11.2258 13 9 13C6.77424 13 4.7463 12.128 3.27718 10.9006C1.77936 9.64926 1 8.15478 1 7C1 5.84522 1.77936 4.35074 3.27718 3.09941C4.7463 1.87204 6.77424 1 9 1C11.2258 1 13.2537 1.87204 14.7228 3.09941C16.2206 4.35074 17 5.84522 17 7Z" :stroke="color" stroke-width="2")
    circle(cx="9" cy="7" r="3" :stroke="color" stroke-width="2")
  svg(v-else-if="name === 'off-password'" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg")
    path(d="M17 8C17 9.15478 16.2206 10.6493 14.7228 11.9006C13.2537 13.128 11.2258 14 9 14C6.77424 14 4.7463 13.128 3.27718 11.9006C1.77936 10.6493 1 9.15478 1 8C1 6.84522 1.77936 5.35074 3.27718 4.09941C4.7463 2.87204 6.77424 2 9 2C11.2258 2 13.2537 2.87204 14.7228 4.09941C16.2206 5.35074 17 6.84522 17 8Z" :stroke="color" stroke-width="2")
    circle(cx="9" cy="8" r="3" :stroke="color" stroke-width="2")
    path(d="M2 1L16 15" :stroke="color" stroke-width="2")
</template>

<script>

export default ({
  name: "VIcon",
  props: ["name", "color"],
})
</script>

