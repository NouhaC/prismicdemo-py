<template>
  <section
    ref="slice"
    class="overflow-hidden"
    :class="`theme-${variationTheme}`"
  >
    <div class="relative py-24 bg-background">
      <div
        class="container relative z-20"
        :class="
          variationCenter
            ? 'text-center'
            : 'md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3 xl:grid-cols-12'
        "
      >
        <div
          :class="
            variationCenter
              ? ''
              : 'lg:grid lg:gap-10 lg:grid-cols-1 xl:col-span-6 xl:grid-cols-3'
          "
        >
          <div
            class="animate-slice-part"
            :class="variationCenter ? '' : 'xl:col-span-2'"
          >
            <Tagline :text="slice.primary.tagline" />
            <Title
              :text="slice.primary.title"
              :class="variationCenter ? 'mx-auto' : ''"
            />
            <Excerpt
              :text="slice.primary.text"
              :class="variationCenter ? 'mx-auto' : ''"
            />
          </div>
        </div>
        <div
          class="grid gap-10 mt-12 animate-slice-part"
          :class="
            variationCenter
              ? 'grid-cols-2 md:grid-cols-4'
              : 'grid-cols-2 lg:col-span-2 xl:col-span-6'
          "
        >
          <div
            v-for="(item, i) in slice.items"
            :key="`number-${i}`"
            class="animate-slice-number"
            :data-end="formatNumber(item.number)"
          >
            <div
              class="
                text-6xl
                lg:text-8xl
                font-semibold
                text-color-1
                h-[71px]
                lg:h-[113px]
                flex
              "
              :class="variationCenter ? 'justify-center' : 'justify-start'"
            >
              <span class="number-value"></span>
              <span class="number-symbol opacity-0">{{
                formatNumber(item.number, 'val')
              }}</span>
            </div>
            <div class="number-label font-semibold text-color-3 opacity-0">
              {{ item.label }}
            </div>
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
  name: 'Numbers',
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
        this.slice.variation === 'center' ||
        this.slice.variation === 'centerSecondary'
      )
    },
    variationTheme() {
      return this.slice.variation === 'sideSecondary' ||
        this.slice.variation === 'centerSecondary'
        ? 'secondary'
        : 'primary'
    },
  },
  methods: {
    formatNumber(n, type) {
      const formatter = Intl.NumberFormat('en', { notation: 'compact' })
      const formatted = formatter.formatToParts(n)

      if (type === 'val') {
        if (formatted.length > 1) {
          return formatted[1].value
        } else {
          return ''
        }
      } else {
        return formatted[0].value
      }
    },
  },
}
</script>