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
            <button v-if="compilationResult === null" @click="compileCode()"
                    class="p-2 border-2 border-sky-600 rounded-xl mx-2 hover:bg-sky-600">
                Compile code
            </button>
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
