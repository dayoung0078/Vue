<script setup>
import {onMounted, ref, watch, watchEffect} from 'vue';
import {useRoute} from 'vue-router';
// use route : url 리소스를 가져올 수 있게 해주는 객체

const route = useRoute();

onMounted(() => {
    console.log(route.params);
});


</script>
<template>
    <h1>pathVariable : {{ $route.params.id }}</h1>
</template>

<style scoped>
</style>