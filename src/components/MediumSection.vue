<template>
  <div class="medium-card mx-80">
    <h2 class="mb-16">{{subTitle}}</h2>
    <hr>
    <br>
    <div class="d-flex_row__start mb-16">
      <div class="badge" v-for="topic in talkingMedium.topics" :key="topic" @click="getUsers(topic)">
        {{ topic }}
      </div>
    </div>
    <div class="d-flex_row__normal">
      <card-medium
        v-for="card in talkingMedium.results"
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
    subTitle: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const talkingMedium = ref([])

    const getUsers = async (typeSearch) => {
      const users = await searchUsers(`search/${typeSearch}`)
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          console.error(error.response)
          return []
        })
      talkingMedium.value = users
    }

    onMounted(() => {
      getUsers(props.typeSearch)
    })
    return {
      getUsers,
      talkingMedium
    }
  }
})
</script>

<style scoped lang="scss">
.medium-card {
  border-radius: 8px;
  margin-bottom: 16px;
}
.badge {
  border-radius: 32px;
  color: #000;
  letter-spacing: 1px;
  padding: 16px;
  background-color: #dddcdc;
  border: .75px solid #ddd;
  cursor: pointer;
  @media (max-width: 999px) {
    padding: 9px;
  }

}
</style>
