<template>
    <div>
        <p>
            Typescript is a "superset" of Javascript. This is a fancy over the top term for "Typescript is Javascript
            with
            bells and whistles".
        </p>

        <p>
            What this means in real terms is:
        </p>

        <ul class="ml-8 list-disc">
            <li>
                A standard JS file can be treated as a Typescript file (and can be run in the browser as is)
            </li>
            <li>
                A TS file will need to be "compiled" by the Typescript compiler before a browser can use it.
            </li>
        </ul>

        <p>
            Here's some normal Javascript!
        </p>

        <CodeBlock :contents="basicJS"/>

        <p>
            The main value that Typescript provides over Javascript is its Type System, where it knows what
            type something is.
        </p>

        <p>You do this with a colon after the definition</p>

        <CodeBlock :contents="basicTS"/>
    </div>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/CodeBlock.vue";

const basicTS = `const typedString: string = 'Test';

// For functions, each param has a type
// The colon after the param list is the return value for the function
function getLengthOfString(value: string): number {
    return value.length;
}

const typedAddition: number = 1 + 2 + 3 + 4;`

const basicJS = `const typedString: string = 'Test';

// For functions, each param has a type
// The colon after the param list is the return value for the function
function getLengthOfString(value: string): number {
    return value.length;
}

const typedAddition: number = 1 + 2 + 3 + 4;`
</script>
