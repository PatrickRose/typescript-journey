<template>
  <div>
      <h2>Example 1: Basic Types</h2>

      <p>
          Fix the errors in the code below
      </p>

      <CodeBlock :contents="boilerPlate" />

      <textarea class="w-full border-4 border-sky-600 p-4 rounded-xl font-mono" v-model="input"></textarea>

      <CompilationTransition :to-compile="boilerPlate + input" recompile-button="true">
          <div class="bg-green-800 p-4 m-2 rounded-xl">
              ✅ Success!
          </div>
      </CompilationTransition>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/CodeBlock.vue";
import {ref} from "vue";
import CompilationTransition from "@/components/CompilationTransition.vue";

type BasicTypesProps = {}

const props = defineProps<BasicTypesProps>();

const boilerPlate = `const first: string = 'test';
const second: number = 1;

function doSomethingWithAString(input: string): number {
    return input.length;
}`

const input = ref<string>(`const anotherString: string = second;
const anotherNumber: number = first;`);
</script>
