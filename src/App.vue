<template>
  <Layout />
</template>

<script>
import Layout from '@/components/Layout.vue'
export default {
  components: {
    Layout
  }
}
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: $blue;
}
::-webkit-scrollbar-thumb:hover {
  background: $background;
}
</style>
