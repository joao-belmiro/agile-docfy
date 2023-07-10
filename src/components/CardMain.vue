<template>
    <div class="card-wrapper mb-16 p-16">
        <h3 :style="color">{{ title }}</h3>
        <p>{{ content }}</p>
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
    content: {
      type: String,
      required: true
    },
    color: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.card-wrapper {
    position: relative;
    width: 46.8%;
    height: 270px;
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    background-image: url('../assets/dots.svg');
    background-repeat: no-repeat;
    background-position: right;
    @media (max-width: 999px) {
        width: 100%;
        height: 200px;
    }
    h3 {
        position: absolute;
        left: 0;
        padding: 8px 8px 8px 16px;
        width: 50%;
        color: $background;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
    }
    p {
       margin-top: 57px;
        font-size: 16px;
        line-height: 2;
        text-align: justify;
    }
}
</style>
