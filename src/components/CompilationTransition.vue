<template>
    <Transition
            enter-from-class="translate-y-full transition opacity-0 ease-in duration-500"
            enter-active-class="transition ease-in duration-500"
            enter-to-class="transition ease-in duration-500"
            leave-from-class="transition ease-in duration-500"
            leave-active-class="transition ease-in duration-500"
            leave-to-class="-translate-y-full transition duration-500 opacity-0 ease-in"
            mode="out-in"
    >
        <StandardButton v-if="compilationResult === null" :on-click="() => compileCode()">
            Compile code
        </StandardButton>
        <div v-else>
            <ul v-if="compilationResult?.length > 0" class="list-disc pl-8">
                <li v-for="(result, key) in compilationResult" :key="key">
                    {{ result }}
                </li>
            </ul>

            <slot v-if="compilationResult?.length == 0" />
            <StandardButton v-else-if="$props.recompileButton" :on-click="() => compilationResult = null">
                Recompile
            </StandardButton>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {compile} from "@/lib/transpile";
import StandardButton from "@/components/StandardButton.vue";

const compilationResult = ref<string[] | null>(null);

type CodeBlockProps = {
    toCompile: string,
    recompileButton?: boolean
}

const props = defineProps<CodeBlockProps>();

function compileCode() {
    compilationResult.value = [];

    compile(props.toCompile).then(
        result => compilationResult.value = result.map(val => val.messageText)
    );
}
</script>
