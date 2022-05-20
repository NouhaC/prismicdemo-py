<template>
  <prismic-rich-text
    :field="text"
    class="excerpt text-color-2 mt-6 max-w-[540px]"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.excerpt /deep/ a {
  @apply underline transition-opacity duration-150 hover:opacity-50 hover:no-underline;
}
</style>