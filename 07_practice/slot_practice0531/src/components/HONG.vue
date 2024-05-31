<script setup>
    import {ref} from 'vue';

    import HONGchild from "./HONGchild.vue";
    // import {ref} from "./HONGchild.vue";

    const Emoginame = ref("name");

</script>

<template>
        
    <div>
        <h1>동해번쩍 서해번쩍 : </h1>
        <input v-model="Emoginame"/>
        <HONGchild>
            <!-- 다이나믹차일드는 우리가 만드려는 컴포넌트 -->
            <template #[Emoginame]>
                <!-- # 은 변수 -->
                {{ Emoginame.img }}
                <!-- 위의 값에 따라서 {{ 여기가 나옴 console.log같은아이 }} -->
                <img class="img"  src="https://dimg.donga.com/wps/NEWS/IMAGE/2001/01/20/6806148.1.jpg"/>

            </template>
        </HONGchild>
    </div>
</template>


<style scoped>
    .parentsContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid;
        
    }

    .img{
        width: 200px;
        height: 200px;
    }



</style>
