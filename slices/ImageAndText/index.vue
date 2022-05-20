<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-12 bg-background">
      <div
        v-if="variationFullWidth"
        class="
          container
          lg:max-w-auto lg:px-0 lg:w-auto
          col-span-12
          z-10
          h-full
          relative
          lg:absolute lg:top-0 lg:bottom-0
        "
        :class="
          variationLeftAligned
            ? 'lg:col-start-1 lg:order-1 lg:left-0 lg:right-1/2 lg:mr-5'
            : 'lg:col-start-7 lg:order-2 lg:left-1/2 lg:right-0 lg:ml-5'
        "
      >
        <prismic-image
          v-if="!slice.primary.video"
          :field="slice.primary.image"
          :data-from="variationLeftAligned ? 'right' : 'left'"
          class="
            animate-slice-part
            lg:absolute lg:inset-0 lg:object-cover
            w-full
            h-auto
            lg:h-full
          "
        />
        <video
          v-else
          :src="slice.primary.video.url"
          class="w-full h-auto"
          autoplay
          playsinline
          muted
          loop
        />
      </div>
      <div
        class="grid grid-cols-12 gap-10 items-center relative z-10 container"
        :class="variationFullWidth ? 'mt-10 lg:mt-0' : 'mt-0'"
      >
        <div
          v-if="!variationFullWidth"
          class="col-span-12 lg:col-span-6 w-full h-full relative"
          :class="
            variationLeftAligned
              ? 'lg:col-start-1 lg:order-1'
              : 'lg:col-start-7 lg:order-2'
          "
        >
          <prismic-image
            v-if="!slice.primary.video"
            :field="slice.primary.image"
            :data-from="variationLeftAligned ? 'right' : 'left'"
            class="
              animate-slice-part
              lg:absolute lg:inset-0 lg:object-contain
              xl:object-cover
              w-full
              h-auto
              lg:h-full
            "
            :class="variationLeftAligned ? 'lg:object-left' : 'lg:object-right'"
          />
          <video
            v-else
            :src="slice.primary.video.url"
            class="w-full h-auto"
            autoplay
            playsinline
            muted
            loop
          />
        </div>
        <div
          :data-from="variationLeftAligned ? 'left' : 'right'"
          class="
            animate-slice-part
            col-span-12
            lg:col-span-6 lg:py-24
            xl:py-32 xl:col-span-5
            flex flex-col
            items-start
          "
          :class="
            variationLeftAligned
              ? 'lg:col-start-7 lg:order-2 xl:col-start-8'
              : 'lg:col-start-1 lg:order-1'
          "
        >
          <Tagline :text="slice.primary.tagline" />
          <Title
            :text="slice.primary.title"
            size="lg"
            :hero="slice.primary.top"
          />
          <Excerpt :text="slice.primary.text" />
          <Cta :link="slice.primary.ctaLink" class="mt-6">
            {{ slice.primary.ctaLabel }}
          </Cta>
        </div>
      </div>
      <Grid />
    </div>
  </section>
</template>

<script>
import animate from '~/mixins/animate'

export default {
  name: 'ImageAndText',
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
    variationFullWidth() {
      return (
        this.slice.variation === 'leftFull' ||
        this.slice.variation === 'rightFull' ||
        this.slice.variation === 'leftFullSecondary' ||
        this.slice.variation === 'rightFullSecondary'
      )
    },
    variationLeftAligned() {
      return (
        this.slice.variation === 'left' ||
        this.slice.variation === 'leftFull' ||
        this.slice.variation === 'leftSecondary' ||
        this.slice.variation === 'leftFullSecondary'
      )
    },
    variationTheme() {
      return this.slice.variation === 'leftSecondary' ||
        this.slice.variation === 'rightSecondary' ||
        this.slice.variation === 'leftFullSecondary' ||
        this.slice.variation === 'rightFullSecondary'
        ? 'secondary'
        : 'primary'
    },
  },
}
</script>