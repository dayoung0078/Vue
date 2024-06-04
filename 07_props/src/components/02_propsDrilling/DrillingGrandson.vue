<script setup>
    import {inject} from 'vue';

    const propsCount = inject("count");



</script>

<template>
    <h3>grandson : {{ propsCount }}</h3>
    <button @Click="propsCount++">{{ propsCount}}</button>
</template>