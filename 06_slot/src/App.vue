<script setup>
    import MyComponent from './components/01_component/MyComponent.vue';
    import Parents from './components/02_slotintro/SlotParents.vue';
    import NamedParents from './components/03_slotnamed/NamedParents.vue';
    import DynamicParent from "./components/04_dynamicslot/DynamicParent.vue";
</script>

<template>
    <div>
        <h1>component Container</h1>
        <MyComponent/>
    </div>

    <main>
        <Parents/>

        <div class="test">
        <NamedParents/>
        <DynamicParent/>
            
        </div>

    </main>
</template>

<style scoped>

</style>
