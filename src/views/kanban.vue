<template>
  <div>
    <Presentation
      :title="$t('whatIsItKanban')"
      :presentationText="$t('presentantionKanban')"
      :urlImage="require('../assets/kanban-method.gif')"
    />
    <div class="title-actors px-80">
      {{ $t('titleScrumActors') }}
    </div>
    <div class="d-flex_row__start mx-80 mt-16">
      <CardMain v-for="card in cards" :key="card" :color="{ backgroundColor: '#3b7ec7' }" :title="$t(`kanbanActors.${card}.title`, card)" :content="$t(`kanbanActors.${card}.content`, card)"/>
    </div>
    <div class="title-rites px-80">
      {{ $t('titleKanbanRites') }}
    </div>
    <div class="d-flex_row__start mx-80 mt-16">
      <CardMain v-for="card in cards" :key="card" :color="{ backgroundColor: '#FFA63D'}" :title="$t(`kanbanRites.${card}.title`, card)" :content="$t(`kanbanRites.${card}.content`, card)"/>
    </div>
    <div class="title-medium px-80 mb-16">
      {{ $t('mediumCardTitlekanban') }}
    </div>
    <MediumSection typeSearch="kanban" :subTitle="$t('titleTopics', {complement: 'kanban'})"/>
  </div>
</template>

<script>
import Presentation from '../components/Presentation.vue'
import CardMain from '../components/CardMain.vue'
import MediumSection from '../components/MediumSection.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    Presentation,
    CardMain,
    MediumSection
  },
  setup () {
    const cards = ref([0, 1, 2, 3])
    return {
      cards
    }
  }
})
</script>
