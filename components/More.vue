<template>
  <prismic-link
    v-if="link.url"
    :field="link"
    class="
      font-semibold
      text-color-3
      mt-4
      flex
      items-center
      transition-colors
      duration-200
      hover:text-color-2
      group
    "
  >
    {{ label }}
    <Arrow
      class="
        w-6
        h-6
        ml-1
        transform
        transition-transform
        ease-in-out
        group-hover:translate-x-1
      "
    />
  </prismic-link>
</template>

<script>
import Arrow from '~/assets/svg/arrow.svg?inline'

export default {
  components: {
    Arrow,
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
}
</script>