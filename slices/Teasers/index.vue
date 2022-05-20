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
      </div>
      <div
        class="
          animate-slice-part
          container
          relative
          z-20
          grid
          gap-10
          grid-cols-1
          sm:grid-cols-2
          mt-14
        "
        :class="slice.items.length <= 2 ? '' : ' lg:grid-cols-3'"
      >
        <div
          v-for="(teaser, i) in slice.items"
          :key="`teaser-${i}`"
          class="flex flex-col"
        >
          <prismic-link :field="teaser.ctaLink">
            <prismic-image :field="teaser.image" class="rounded-lg" />
            <Title :text="teaser.title" size="xs" />
          </prismic-link>
          <Excerpt :text="teaser.text" class="flex-grow" />
          <More :link="teaser.ctaLink" :label="teaser.ctaLabel" />
        </div>
      </div>
      <Grid />
    </div>
  </section>
</template>

<script>
import animate from '~/mixins/animate'

export default {
  name: 'Teasers',
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
    variationTheme() {
      return this.slice.variation === 'secondary' ? 'secondary' : 'primary'
    },
  },
}
</script>