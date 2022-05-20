<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-24 bg-background text-center">
      <div class="container relative z-20">
        <div class="animate-slice-part">
          <Tagline :text="slice.primary.tagline" />
          <Title :text="slice.primary.title" class="mx-auto" />
          <Excerpt :text="slice.primary.text" class="mx-auto" />
        </div>
        <div
          v-if="!variationCarousel"
          class="animate-slice-part flex flex-wrap justify-center mt-12 -m-5"
        >
          <div
            v-for="(testimonial, i) in slice.items"
            :key="`logo-${i}`"
            class="w-full sm:w-1/2 lg:w-1/3 p-5"
          >
            <Testimonial
              :testimonial="testimonial"
              :length="slice.items.length"
            />
          </div>
        </div>
        <div
          v-else
          v-swiper="swiperOption"
          class="mt-14 animate-slice-part"
          :loadtheme="false"
        >
          <div class="swiper-wrapper">
            <div
              v-for="(testimonial, i) in slice.items"
              :key="`logo-${i}`"
              class="swiper-slide"
            >
              <Testimonial
                :testimonial="testimonial"
                :length="slice.items.length"
              />
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
  name: 'Testimonials',
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
        slidesPerView: 1,
        spaceBetween: 40,
        centerInsufficientSlides: true,
        watchOverflow: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
            slidesPerGroup: 2,
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