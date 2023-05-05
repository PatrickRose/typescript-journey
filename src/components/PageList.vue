<template>
    <div class="overflow-hidden">
        <Transition
                enter-from-class="translate-x-full transition opacity-0"
                enter-active-class="absolute w-screen"
                enter-to-class="transition duration-500"
                leave-from-class="transition duration-500"
                leave-active-class="absolute w-screen"
                leave-to-class="-translate-x-full transition opacity-0 duration-500"
                mode="out-in"
        >
            <Component :is="$props.pages[currentPage]"/>
        </Transition>
        <div class="flex justify-between py-2">
            <div>
                Page <strong>{{ currentPage + 1 }}</strong> of <strong>{{ $props.pages.length }}</strong>
            </div>
            <div>
                <PaginationButton v-if="currentPage != 0" :on-click="() => currentPage--">
                    Previous
                </PaginationButton>
                <PaginationButton v-if="currentPage + 1 != $props.pages.length" :on-click="() => currentPage++">
                    Next
                </PaginationButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type {Component} from "vue";
import {ref} from "vue";
import PaginationButton from "@/components/PaginationButton.vue";

type PageListProps = {
    pages: Component[]
}

const props = defineProps<PageListProps>();

const currentPage = ref<number>(0);
</script>
