<template>
  <div class="d-flex_row__center px-80 dots">
    <div>
        <h1 class="mb-16">{{ title }}</h1>
        <p>{{ presentationText }}</p>
    </div>
    <img :src="urlImage" alt="imagem scrum ">
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    presentationText: {
      type: String,
      required: true
    },
    urlImage: {
      type: String,
      required: true
    }
  },
  setup () {
  }
})
</script>

<style scoped lang="scss">
.dots {
  background-image: url('../assets/dots.svg');
  background-repeat: repeat-y;
  background-position: left;
  object-fit: contain;

}
p {
    line-height: 2;
    text-align: justify;
    font-size: 18px;
    letter-spacing: 1px;
    margin-right: 30px;
    @media (max-width: 999px) {
        margin-right: 0;
        margin-bottom: 16px;
    }
}

img {
    @media (max-width: 999px) {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
