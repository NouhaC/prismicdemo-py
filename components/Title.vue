<template>
  <prismic-rich-text
    v-if="!hero"
    :field="text"
    class="font-semibold text-color-1 mt-6 max-w-[540px] xl:max-w-[786px]"
    :class="sizes"
  />
  <h1
    v-else
    class="font-semibold text-color-1 mt-6 max-w-[540px] xl:max-w-[786px]"
    :class="sizes"
  >
    {{ $prismic.asText(text) }}
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: Array,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
    },
    hero: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sizes() {
      if (this.size === 'xl') {
        return 'text-4xl sm:text-5xl lg:text-6xl'
      } else if (this.size === 'lg') {
        return 'text-4xl sm:text-5xl'
      } else if (this.size === 'sm') {
        return 'text-2xl sm:text-3xl'
      } else if (this.size === 'xs') {
        return 'text-xl sm:text-2xl'
      } else {
        return 'text-3xl sm:text-4xl'
      }
    },
  },
}
</script>