<template>
  <div class="card-main mb-16 p-16">
    <div>
      <img class="mr-16" :src="img" :alt="'imagem de' + author" />
    </div>
    <div class="">
      <div class="mb-16">
        <strong>{{ author }}</strong>
      </div>
      <p class="mb-16">{{ description }}</p>
      <a :href="link" target="_blank" rel="noopener noreferrer"
        >{{$t('titleViewProfile')}} <i>&rarr;</i></a
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
  border: 1px solid #ddd;

}
.card-main {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 32.6%;
  height: 200px;
  @media (max-width: 999px) {
    width: 100%;
    height: 140px;
  }
}
p {
  font-size: 12px;
}

a {
  margin-top: auto;
  text-decoration: none;
  font-size: 16px;
  color: $purple;

  i {
    font-size: 24px;
  }
}
</style>
