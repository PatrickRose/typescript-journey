<script lang="ts" setup>
import PageList from "@/components/PageList.vue";
import InitialOverview from "@/views/Overview/InitialOverview.vue";
import IncludingTypes from "@/views/Overview/IncludingTypes.vue";

const pages = [
    InitialOverview,
    IncludingTypes
];
</script>

<template>
    <h1>Overview</h1>
    <PageList :pages="pages" />
</template>

<style>

</style>
