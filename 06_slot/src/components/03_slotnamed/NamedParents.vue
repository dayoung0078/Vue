<script setup>
import { reactive } from 'vue';
import NameChild from './NamedChild.vue'

const obj = reactive({
    name:"vue",
    founder : "Evan you",
    img : "https://images.ctfassets.net/s5uo95nf6njh/2fEr6ctL9FxPtOPhUcM4FA/773007e573bfa16aebdb736f767b45fa/evan-you-hero.jpg"

});
// 리액티브 = 반응성객체, ref는 
</script>

<template>
    <div class="container">
        <h1>NameSlot</h1>
        
        <NameChild>
            <!-- 여기안에서 내용을 써 넣으려고 -->
            <template v-slot:name>
                <h2>
                    name:{{ obj.name }}
                </h2>

            </template>

            <template #founder>
            <!-- #이 뭔지 적기 -->
            <p>founder : {{ obj.founder }}</p>
            </template>

            <template v-slot:img>
            <!-- 컨텐츠를 전달하는게 슬롯 -->
            <img :src="obj.img" alg="image"/>
            </template>
                
        </NameChild>
    </div>
</template>

<style scoped>
    .Container{
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
    }

    img{
        width : 200px;
        height : 200px;
    }

</style>