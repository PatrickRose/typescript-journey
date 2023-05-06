<template>
    <pre class="border-4 border-sky-600 p-4 rounded-xl font-bold whitespace-pre-wrap">{{ $props.contents }}</pre>
</template>

<script setup lang="ts">
type CodeBlockProps = {
    contents: string
}

const props = defineProps<CodeBlockProps>();
</script>
