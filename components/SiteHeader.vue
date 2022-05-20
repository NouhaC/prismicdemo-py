<template>
  <div>
    <header class="theme-primary overflow-hidden relative z-40">
      <div
        class="
          flex
          justify-between
          items-center
          py-2
          md:py-4
          lg:py-6
          xl:py-8
          px-8
          relative
          z-10
        "
      >
        <nuxt-link to="/">
          <prismic-image
            :field="$store.state.partials.logotype"
            class="h-5 w-auto"
          />
        </nuxt-link>
        <nav class="flex items-center">
          <Cta
            v-for="(cta, i) in $store.state.partials.cta"
            :key="`cta-${i}`"
            :link="cta.link"
            type="border"
            size="sm"
          >
            <Download class="w-5 h-5 -mx-1 sm:ml-0 sm:mr-1" />
            <span class="sr-only sm:not-sr-only">{{ cta.label }}</span>
          </Cta>
          <button
            class="
              text-color-1
              w-12
              h-12
              ml-2
              transition-colors
              duration-200
              hover:text-color-3
            "
            :aria-expanded="menuOpen"
            aria-controls="menu"
            @click="menuOpen = !menuOpen"
          >
            <Burger class="h-6 w-6 mx-auto" />
          </button>
        </nav>
      </div>
      <Grid />
    </header>
    <transition
      enter-class="opacity-0 translate-x-full"
      enter-active-class="transition-all duration-300"
      leave-active-class="transition-all duration-100"
      leave-to-class="opacity-0 translate-x-full"
    >
      <nav
        v-if="menuOpen"
        id="menu"
        class="
          transform
          shadow-xl
          theme-primary
          fixed
          z-50
          right-0
          top-0
          bottom-0
          bg-background
          w-96
          h-screen
          p-12
          pt-24
        "
      >
        <button
          class="
            text-color-1
            w-12
            h-12
            absolute
            top-2
            md:top-4
            lg:top-6
            xl:top-8
            right-8
            transition-colors
            duration-200
            hover:text-color-3
          "
          @click="menuOpen = !menuOpen"
        >
          <Close class="h-6 w-6 mx-auto" />
        </button>
        <Tagline :text="$store.state.partials.navTitle" />
        <div class="mt-6">
          <prismic-link
            v-for="(navItem, i) in $store.state.partials.navigation"
            :key="`nav-item-${i}`"
            :field="navItem.link"
            class="
              block
              text-color-2 text-xl
              my-2
              transition-colors
              hover:text-color-1
            "
            @click.native="menuOpen = !menuOpen"
          >
            {{ navItem.label }}
          </prismic-link>
        </div>
      </nav>
    </transition>
    <transition
      enter-class="opacity-0"
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black z-40 opacity-50"
        @click="menuOpen = !menuOpen"
      />
    </transition>
  </div>
</template>

<script>
import Close from '~/assets/svg/close.svg?inline'
import Burger from '~/assets/svg/burger.svg?inline'
import Download from '~/assets/svg/download.svg?inline'

export default {
  components: {
    Burger,
    Close,
    Download,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
}
</script>