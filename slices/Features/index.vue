<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-24 bg-background">
      <div class="animate-slice-part container relative z-20 text-center">
        <Tagline :text="slice.primary.tagline" />
        <Title :text="slice.primary.title" class="mx-auto" />
        <Excerpt :text="slice.primary.text" class="mx-auto" />
      </div>
      <div
        class="animate-slice-part container relative z-20 mt-14"
        :class="variationCenter ? 'text-center' : ''"
      >
        <div
          class="-m-5 flex flex-wrap"
          :class="variationCenter ? 'justify-center' : ''"
        >
          <div
            v-for="(usp, i) in slice.items"
            :key="`usp-${i}`"
            class="flex flex-col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-5"
          >
            <prismic-image
              :field="usp.image"
              class="rounded-full w-16 h-16"
              :class="variationCenter ? 'mx-auto' : ''"
            />
            <Title :text="usp.title" size="xs" />
            <Excerpt :text="usp.text" class="flex-grow" />
            <More
              :link="usp.ctaLink"
              :label="usp.ctaLabel"
              :class="variationCenter ? 'mx-auto' : ''"
            />
          </div>
        </div>
      </div>
      <Grid />
    </div>
  </section>
</template>

<script>
import animate from '~/mixins/animate'

export default {
  name: 'Usps',
  mixins: [animate],
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  computed: {
    variationCenter() {
      return (
        this.slice.variation === 'centered' ||
        this.slice.variation === 'centeredSecondary'
      )
    },
    variationTheme() {
      return this.slice.variation === 'leftSecondary' ||
        this.slice.variation === 'centeredSecondary'
        ? 'secondary'
        : 'primary'
    },
  },
}
</script>