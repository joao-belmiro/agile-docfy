<template>
  <div class="card-main mb-16 p-16">
    <div>
      <img class="pr-16" :src="img" :alt="'imagem de' + author" />
    </div>
    <div class="pr-16">
      <div class="mb-16">
        <strong>{{ author }}</strong>
      </div>
      <p class="mb-16">{{ description }}</p>
      <a :href="link" target="_blank" rel="noopener noreferrer"
        >ver Perfil &#8594;</a
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
img {
  border-radius: 50%;
  width: 96px;
  height: 96px;
  object-fit: contain;
}
.card-main {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  width: 32.5%;
  height: 180px;
  @media (max-width: 999px) {
    width: 100%;
    height: 140px;
  }
}
p {
  font-size: 12px;
  text-align: justify;
}

a {
  margin-top: auto;
  text-decoration: none;
  font-size: 16px;
  color: $purple;
}
</style>
