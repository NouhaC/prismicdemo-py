<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-12 bg-background">
      <div class="container relative z-20">
        <div class="relative text-center">
          <div
            class="
              animate-slice-part
              relative
              z-10
              flex flex-col
              justify-center
              items-center
              px-6
            "
            :class="!variationFull ? 'py-32' : 'py-20 xl:py-32 2xl:py-64'"
          >
            <Tagline :text="slice.primary.tagline" />
            <Title
              :text="slice.primary.title"
              size="xl"
              :hero="slice.primary.top"
            />
            <Excerpt :text="slice.primary.text" />
            <nav
              v-if="slice.items.length"
              class="flex flex-wrap items-center justify-center mt-6"
            >
              <Cta
                v-for="(cta, i) in slice.items"
                :key="`cta-${i}`"
                class="m-2"
                :link="cta.ctaLink"
                :type="cta.ctaStyle.toLowerCase()"
              >
                {{ cta.ctaLabel }}
              </Cta>
            </nav>
          </div>
          <prismic-image
            v-if="!variationFull && slice.primary.image.url"
            :field="slice.primary.image"
            class="
              absolute
              object-cover
              h-full
              w-full
              top-0
              bottom-0
              rounded-lg
            "
          />
        </div>
      </div>
      <prismic-image
        v-if="variationFull && slice.primary.image.url"
        :field="slice.primary.image"
        class="absolute object-cover h-full w-full inset-0 z-10"
      />
      <Grid />
    </div>
  </section>
</template>

<script>
import animate from '~/mixins/animate'

export default {
  name: 'Cover',
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
    variationFull() {
      return (
        this.slice.variation === 'full' ||
        this.slice.variation === 'fullSecondary'
      )
    },
    variationTheme() {
      return this.slice.variation === 'fullSecondary' ||
        this.slice.variation === 'containedSecondary'
        ? 'secondary'
        : 'primary'
    },
  },
}
</script>