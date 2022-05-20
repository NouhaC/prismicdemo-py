<template>
  <div>
    <prismic-image
      :field="testimonial.image"
      class="rounded-full mx-auto"
      :class="length > 1 ? 'w-32 h-32' : 'w-48 h-48'"
    />
    <prismic-rich-text
      :field="testimonial.quote"
      class="text-color-2"
      :class="length > 1 ? 'text-base mt-8' : ' text-2xl mt-10'"
    />
    <span
      class="block text-color-1 font-semibold"
      :class="length > 1 ? 'text-xl mt-8' : 'text-2xl mt-10'"
    >
      {{ testimonial.author }}
    </span>
    <span class="block text-color-3" :class="length > 1 ? 'mt-1' : 'mt-2'">{{
      testimonial.title
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
}
</script>