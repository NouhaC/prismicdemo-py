<template>
  <div>
    <SiteHeader />
    <Nuxt class="relative z-10" />
    <SiteFooter />
  </div>
</template>

<script>
export default {
  // Fetch the prismic partials to store
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchPartials', $prismic)
  },
}
</script>