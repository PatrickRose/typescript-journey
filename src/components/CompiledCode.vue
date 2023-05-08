<template>
    <CodeBlock :contents="$props.contents" />
    <div class="py-2">
        <Transition
            enter-from-class="translate-y-full transition opacity-0 ease-in duration-500"
            enter-active-class="transition ease-in duration-500"
            enter-to-class="transition ease-in duration-500"
            leave-from-class="transition ease-in"
            leave-active-class="transition ease-in"
            leave-to-class="-translate-y-full transition opacity-0 ease-in"
            mode="out-in"
        >
            <StandardButton v-if="compilationResult === null" :on-click="() => compileCode()">
                Compile code
            </StandardButton>
            <ul v-else-if="compilationResult?.length > 0" class="list-disc pl-8">
                <li v-for="result in compilationResult">
                    {{ result }}
                </li>
            </ul>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/CodeBlock.vue";
import {ref} from "vue";
import {compile} from "@/lib/transpile";
import StandardButton from "@/components/StandardButton.vue";

type CodeBlockProps = {
    contents: string
}

const props = defineProps<CodeBlockProps>();

const compilationResult = ref<string[]|null>(null);

function compileCode() {
    compilationResult.value = [];

    compile(props.contents).then(
        result => compilationResult.value = result.map(val => val.messageText)
    );
}
</script>
