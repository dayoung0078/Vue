<script setup>

import blogItem from "./BlogItem.vue";
import { useBlogStore } from "../stores/blog";
import {onMounted, provide} from "vue";


const BlogStore = useBlogStore();

onMounted(()=>{
BlogStore.blogHandler();
})
</script>

<template>
<div>
    <div v-for ="blog in useBlogStore.blogs" class="listBox">
        <blogItem :key="blog.id" :blog="blog"></blogItem>
    
    </div>
</div>

</template>

    <style scoped>
    .listBox{
        width: 70%
    }
    </style>