<!--
    컴포넌트의 lifecycle hooks를 사용하는 방식은 2가지가 있다.
    <script setup>으로 script에 setup 지시문을 추가하여 hooks를 바로 사용하는 방식과
    다음과 같이 사용하는 방식이다.
    -->

<script>
    import {onMounted} from "vue";  

    export default {  // 내가 내보낼건데 기본값으로 내보낼거야
        setup(){
            onMounted( async () =>{ // onMounted ->돔이 추가가 됐을 때?
                console.log("hellow! vue");
            })
        }
    } // vue2문법임. 

</script>
<!-- 
    vue는 사용자의 화면에 보여지는 부분을 내보낼 때 다음과 같이 <template> 하위에 구성하여 작성한다.
        이렇게 하는 이유 : 레이아웃을 불필요하게 잡아주는 이유가 있어서 그렇다.
        template는 다른 엘리먼트 요소를 감싸주는 역할을 수행하며 사용자의 화면에 렌더링할 때 제거된다.

아래 <template> // 부모노드    
    규칙 : 항상 템플릿으로 시작하고 형제노드를 가질 수 있다. -->

<template> 

    <h1>Hello vue</h1>
</template>

<!-- 
    현재 컴포넌트에서만 적용되는 스타일을 작성한다.(css정의,속성)
-->
<style scoped>
/* css를 정의하는 스코프, scoped는 뷰만 갖고있는 고유한값. 다른파일에서 스타일끼리 충돌할까봐 (각 파일의 지역변수같은것임) */
</style>