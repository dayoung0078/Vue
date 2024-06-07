<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();
    const { blog } = defineProps(["blog"]);

    function detailView(id) {
        router.push(`/blogs/${id}`); // 패스베리어블 (해당 리소스를 선택하기위한 프라이머리키를 지정)
    }

</script>

<template>
    <div class="itembox">
        <label>제목 {{ }} </label>
        <button @click="detailView(blog.id)">조회하기</button>
    </div>

</template>

<style scoped>
.itemBox {
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    height: 30px;
    margin-bottom: 1%;
}

label {
    margin-left: 1%;
}

button {
    margin-right: 1%;
}
</style>