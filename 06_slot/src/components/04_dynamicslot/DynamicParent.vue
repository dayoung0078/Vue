<script setup>
    import {ref} from 'vue';

    import DynamicChild from "./DynamicChild.vue";
    // import {ref} from "./DynamicChild.vue";

    const dynamicName = ref("name");

</script>

<template>
    <div>
        <h1>DynamicSlot : </h1>
        <input v-model="dynamicName"/>
        <DynamicChild>
            <!-- 다이나믹차일드는 우리가 만드려는 컴포넌트 -->
            <template #[dynamicName]>
                <!-- # <-다이나믹네임 변수 -->
                {{ dynamicName }}
            </template>
        </DynamicChild>
    </div>
</template>


<style scoped>
    .parentsContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid;
        
    }
</style>
