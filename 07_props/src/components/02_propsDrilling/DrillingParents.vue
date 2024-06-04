<script setup>
    import {provide, ref} from 'vue';
    import Child from ".DrillingChild.vue"

    const count =ref(0);
    // 여기서 정의된거를 프로바이드로 나눠주고있다.
    provide('count',count);
</script>

<template>
    <div class="container">
        <h1>parents : {{ count }}</h1>
        <Child />
    </div>

</template>

<style scoped>
.container {
    border: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>