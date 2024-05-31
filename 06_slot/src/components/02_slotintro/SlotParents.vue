<script setup>
    import {ref} from 'vue';
    import Child from "./SlotChild.vue";
    
    const props = ref("hello data");

</script>

<!-- slot
        여러가지 컨텐츠 안에서 하나의 슬롯(컨텐츠를 전달하는게 슬롯)을 바꾸는 형식. (네이버에서 광고부분 변경되는것.)
        슬롯은 vue 컴포넌트에서 콘텐츠를 전달하는 메커니즘으로 부모 컴포넌트에서 자식 컴포넌트로 데이터나 구조를 전달하는데 사용된다.
        슬롯을 사용하면 부모 컴포넌트에서 자식 컴포넌트의 일부를 동적으로 결정할 수 있으며, 재사용 가능한 컴포넌트를 작성하는데 도움이 된다.
        일반적으로 컴포넌트 내의 마크업에서 <slot> 요소를 사용하여 슬롯을 정의하며 이는 자식 컴포넌트에서 해당 영역에 부모 컴포넌트로부터
            전달된 콘텐츠를 표시하도록 지시한다.
            컴포넌트를 모아놓은게 = 컨텐츠를 전달하는게 슬롯
            컨테이너 안에 슬롯을 변경하던가, 통으로 만든 슬롯을 바꾸던가. (네이버 광고)
        -->

<template>
    <div class="parentsContainer">
        <h1>Parents</h1>
        <Child>
            <!-- <Child> 대문자로 시작해서 하나의 컴포넌트를 만들겠다는 뜻 -->
            {{ props }}

        </Child>
        
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