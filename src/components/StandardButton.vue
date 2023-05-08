<template>
  <button @click="$props.onClick"
          class="p-2 border-2 border-sky-600 rounded-xl mx-2 hover:bg-sky-600">
      <slot />
  </button>
</template>

<script setup lang="ts">
type StandardButtonProps = {
    onClick?: () => void
}

const props = defineProps<StandardButtonProps>();
</script>

<style scoped lang="scss">

</style>
