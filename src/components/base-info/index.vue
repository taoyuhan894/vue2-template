<template>
  <div class="info">
    <slot></slot>
  </div>
</template>
<script>
export default {
  provide () {
    return {
      info: this
    }
  },
  props: {
    labelWidth: {
      type: String,
      default: '140px'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
