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
      <CardMain v-for="card in cards" :key="card" :color="{ backgroundColor: '#3b7ec7' }" :title="$t(`scrumActors.${card}.title`, card)" :content="$t(`scrumActors.${card}.content`, card)"/>
    </div>
    <div class="title-rites px-80">
      {{ $t('titleScrumRites') }}
    </div>
    <div class="d-flex_row__start mx-80 mt-16">
      <CardMain v-for="card in cards" :key="card" :color="{ backgroundColor: '#FFA63D'}" :title="$t(`scrumRites.${card}.title`, card)" :content="$t(`scrumRites.${card}.content`, card)"/>
    </div>
    <div class="title-medium px-80 mb-16">
      {{ $t('mediumCardTitlekanban') }}
    </div>
    <MediumSection typeSearch="kanban"/>
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

<style lang="scss">
.title-rites {
  box-sizing: border-box;
  background-color: $contrast;
  color: $background;
  font-size: 20px;
  width: 100%;
  height: 80px;
  line-height: 80px;
}
.title-medium {
  box-sizing: border-box;
  background-color: $purple;
  color: $background;
  font-size: 20px;
  width: 100%;
  height: 80px;
  line-height: 80px;
}
.title-actors {
  box-sizing: border-box;
  background-color: $blue;
  color: $background;
  font-size: 20px;
  width: 100%;
  height: 80px;
  line-height: 80px;
}
</style>
