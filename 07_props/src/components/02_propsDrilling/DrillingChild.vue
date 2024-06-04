<script setup>
    import {inject, ref, updated} from 'vue';
    import grandson from ".DrillingGrandson.vue"
    const propsCount = inject("count");

</script>

<template>
    <h2>child : {{ propsCount }}</h2>
</template>