<template>
  <prismic-link
    class="
      rounded-sm
      py-3
      px-5
      font-semibold
      transition-colors
      duration-200
      flex
      items-center
      border-2 border-cta
    "
    :class="classes"
    :field="link"
  >
    <slot />
  </prismic-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'filled',
    },
    size: {
      type: String,
      default: 'lg',
    },
  },
  computed: {
    classes() {
      const type =
        this.type === 'filled'
          ? 'bg-cta text-white hover:bg-cta-hover hover:border-cta-hover'
          : 'text-cta hover:text-cta-hover hover:border-cta-hover'

      const size = this.size === 'lg' ? 'py-3 px-5' : 'py-1.5 px-2.5'

      return type + ' ' + size
    },
  },
}
</script>