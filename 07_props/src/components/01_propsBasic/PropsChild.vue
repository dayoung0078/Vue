<script setup>
    import {inject} from 'vue';

    // inject - 주입하다
    // inject("전달한 key값"); <- 인젝트의
    
    // const message = data.message <- 아래식을 풀어쓴것임
    const darkMode = inject("darkMode"); // 객체 형식의 데이터
    const message = inject('message'); // 단일 데이터
    
    function darkMode (){
        darkState.value = !darkState.value
    }
</script>

<template>
    <div class="box">

    
    <h3> 전달 받은 props : {{ message }}</h3>
    <h1> 다크모드 활성화 여부 : {{ darkState }}</h1>
    </div>
</template>

<style>
.box {
    border: 1px dotted black;
}
</style>