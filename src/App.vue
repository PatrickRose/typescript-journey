<script setup lang="ts">
import {RouterView} from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
    <header>
        <Navbar/>
    </header>

    <main class="m-8 sm:mx-16">
        <RouterView/>
    </main>

</template>
