<template>
    <pre class="border-4 border-sky-600 p-4 rounded-xl font-bold whitespace-pre-wrap">{{ code }}</pre>
</template>

<script setup lang="ts">
import {ref} from "vue";

type CodeBlockProps = {
    filePath?: string
    contents?: string
}

const props = defineProps<CodeBlockProps>();

const code = ref(props.contents);

if (props.filePath) {
    code.value = 'Loading, please wait...';
    fetch(import.meta.env.BASE_URL + props.filePath)
        .then(
            (val) => val.text()
        )
        .then(
            (val) => code.value = val.trim()
        );
} else {
    if (typeof props.contents != 'string') {
        throw new Error('Did not provide a file path or contents');
    }
}
</script>
