<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-24 bg-background text-center">
      <div class="animate-slice-part container relative z-20">
        <div class="animate-slice-part">
          <Tagline :text="slice.primary.tagline" />
          <Title :text="slice.primary.title" class="mx-auto" />
        </div>
        <div
          v-if="!variationCarousel"
          class="
            animate-slice-part
            flex flex-wrap
            justify-center
            mt-12
            -mx-5
            -mb-2
          "
        >
          <div
            v-for="(brand, i) in slice.items"
            :key="`logo-${i}`"
            class="w-1/2 sm:w-1/4 lg:w-1/6 px-5 py-2"
          >
            <prismic-link v-if="brand.link.url" :field="brand.link">
              <prismic-image :field="brand.logo" />
            </prismic-link>
            <prismic-image v-else :field="brand.logo" />
          </div>
        </div>
        <div
          v-else
          v-swiper="swiperOption"
          class="animate-slice-part mt-14"
          :loadtheme="false"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(brand, i) in slice.items"
              :key="`logo-${i}`"
              class="swiper-slide"
            >
              <prismic-link v-if="brand.link.url" :field="brand.link">
                <prismic-image :field="brand.logo" />
              </prismic-link>
              <prismic-image v-else :field="brand.logo" />
            </div>
          </div>
          <div class="swiper-pagination" />
        </div>
      </div>
      <Grid />
    </div>
  </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import animate from '~/mixins/animate'

export default {
  name: 'Logos',
  directives: {
    swiper: directive,
  },
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
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 40,
        centerInsufficientSlides: true,
        watchOverflow: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
          },
        },
      },
    }
  },
  computed: {
    variationCarousel() {
      return (
        this.slice.variation === 'carousel' ||
        this.slice.variation === 'carouselSecondary'
      )
    },
    variationTheme() {
      return this.slice.variation === 'stackedSecondary' ||
        this.slice.variation === 'carouselSecondary'
        ? 'secondary'
        : 'primary'
    },
  },
}
</script>

<style lang="postcss" scoped>
.swiper-pagination {
  @apply relative mt-14;
}

.swiper-pagination /deep/ .swiper-pagination-bullet {
  @apply bg-color-3 w-3 h-3;
}

.swiper-pagination /deep/ .swiper-pagination-bullet-active {
  @apply bg-color-2;
}
</style>