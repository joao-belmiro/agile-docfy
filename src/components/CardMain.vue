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
    height: 223px;
    border: 1px solid #999;
    border-radius: 22px;
    background-image: url('../assets/dots.svg');
    background-repeat: no-repeat;
    background-position: right;
    @media (max-width: 999px) {
        width: 100%;
        height: auto;
    }
    @media (min-width: 1400px) {
        width: 46.5%;
    }
    @media (min-width: 1000px) and (max-width: 1399px) {
        width: 45.5%;
    }
    h3 {
        position: absolute;
        left: -10px;
        padding: 12px 16px 12px 16px;
        color: $background;
        border-radius: 6px;
        letter-spacing: 3px;
        @media (max-width: 999px) {
          font-size: 13px;
          max-width: 290px;
        }
    }
    p {
        margin-top: 67px;
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
        @media (max-width: 1400px) {
          font-size: 13.5px;
        }
        @media (max-width: 999px) {
          margin-top: 76px;
        }
    }
}
</style>
