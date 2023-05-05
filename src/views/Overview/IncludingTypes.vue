<template>
    <div>
        <p>
            Including the types all the time is a bit annoying, but Typescript has a concept of "inferred" types
        </p>

        <p>
            If Typescript can guess the type of your variable based on context, it just will!
        </p>

        <CodeBlock file-path="example-code/Overview/inferred-types.ts"/>

        <p>
            This allows the compiler to spot mistakes, like when we try and add a string to a number, or assign the
            wrong type to
            a variable
        </p>

        <CompiledCode :contents="invalidCode"/>

        <p>
            The above examples are toy examples where it's somewhat obvious what's going on
        </p>

        <p>
            Try and spot the bug here though!
        </p>

        <CompiledCode :contents="countNumberOfNumbersInStringCode"/>
    </div>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/CodeBlock.vue";
import CompiledCode from "@/components/CompiledCode.vue";

const invalidCode = `function getLengthOfString(value: string): number {
    return value.length;
}

const someNumber: number = 12;
// Compilation error
// An argument of type 'number' is not assignable to parameter of type 'string'
getLengthOfString(someNumber);

// Compilation error
// Type 'number' is not assignable to type string
const anotherNumber: string = getLengthOfString('test');`

const countNumberOfNumbersInStringCode = `function countNumberOfNumbersInString(input: string): number {
    let count = 0;

    const numbers = [0,1,2,3,4,5,6,7,8,9];

    for (let i=0; i< input.length; i++) {
        if (numbers.includes(input[i])) {
            count++;
        }
    }

    return count;
}`
</script>
