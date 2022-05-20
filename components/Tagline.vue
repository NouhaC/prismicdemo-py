<template>
  <span
    class="
      uppercase
      tracking-widest
      text-sm
      font-semibold
      text-color-3
      max-w-[540px]
    "
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>