<script lang="ts" setup>
import PageList from "@/components/PageList.vue";
import InitialOverview from "@/views/Overview/InitialOverview.vue";
import IncludingTypes from "@/views/Overview/IncludingTypes.vue";
import BasicTypesExample from "@/views/Overview/BasicTypesExample.vue";

const pages = [
    InitialOverview,
    IncludingTypes,
    BasicTypesExample
];
</script>

<template>
    <h1>Overview</h1>
    <PageList :pages="pages" />
</template>

<style>

</style>
