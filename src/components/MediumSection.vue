<template>
  <div class="medium-card mx-80">
    <div class="d-flex_row__normal p-16">
      <card-medium
        v-for="card in talkingMedium"
        :key="card.author"
        :author="card.author"
        :description="card.description"
        :img="card.image"
        :link="card.link"
      />
    </div>
  </div>
</template>

<script>
import CardMedium from './CardMedium.vue'
import { defineComponent, onMounted, ref } from 'vue'
import searchUsers from '../services/axios'
export default defineComponent({
  components: {
    CardMedium
  },
  props: {
    typeSearch: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const talkingMedium = ref([])

    onMounted(async () => {
      const users = await searchUsers(`search/${props.typeSearch}`)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          console.error(error.response)
          return []
        })

      talkingMedium.value = users
    })
    return {
      talkingMedium
    }
  }
})
</script>

<style scoped lang="scss">
.medium-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  margin-bottom: 16px;
}
h1 {
  border-bottom: 1px solid #e5e5e5;
}
</style>
