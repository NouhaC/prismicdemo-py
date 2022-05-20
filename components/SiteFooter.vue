<template>
  <div>
    <footer
      class="theme-secondary overflow-hidden relative bg-background py-12"
    >
      <div class="container text-center text-color-2 relative z-10">
        <prismic-rich-text
          class="rich-text"
          :field="$store.state.partials.text"
        />
      </div>
      <Grid />
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.rich-text /deep/ a {
  @apply text-color-1 underline;
}
</style>