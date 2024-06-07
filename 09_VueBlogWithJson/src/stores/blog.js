import {ref, reactive} from "vue";
import {defineStore} from "pinia";
import {useRouter} from "vue-router";



// stores를 이용하는 순간 반응성 변수들 
export const useBlogStore = defineStore("blog",()=>{
    const router = useRouter ();
    const blogs = ref([{}]);
    const detailsBlog =reactive({});
    const postBlog = reactive({
        title: "",
        content:"",
        img:""
    });

    /*
        ENV
        vite를 사용하는 경우 프로젝트 로드시 .env 파일을 자바스크립트 엔진이 확인하여
        import.meta.env에 등록한다. (등록하는 경로) vite가 갖고있는 특징.
        여기서 클라이언트의 실수로 환경 변수가 유출되는 것을 방지하기 위해 접두사가 붙은 변수만 사용하게 된다.
    
    */
    const blogHandler = () => { //조회용
        fetch(import.meta.env.VITE_API_URL + "/post") // fetch - 외부 api 호출
        .then(response => response.json())
        .then(data => blogs.value = data);
        
    }

    const detailsHandler = (id) => {
        fetch(import.meta.env.VITE_API_URL + "/post/" + id)
        .then(response => response.json())
        .then(data => detailsBlog.value = {...data});
        // 스프레드 연산자를 이용하면 데이터를 깊은복사를 한게 스프레드 연산자. ex) {...data});
        // fetch ip 불러올때는 get

        
    }

    const modifyHandler = (blog) => {
        fetch(import.meta.env.VITE_API_URL + "/post/" + blog.id, {
            method: "PUT",
            body: JSON.stringify({
                title: blog.title, // key
                content: blog.content, // value
                img: blog.img // value
            })
        }).then(response => response.status) // 상태코드? 무언가의 상황으로 인해서 끊어지거나 지연될때 정상적으로 응답했는지 상태코드임 
        // 상태값 200번대 : 응답성공 / 400번대 : (클라이언트잘못) 응답 실패 /  그 이후는 노션에서 확인하세용
        .then(result => result == 200? router.push("/") : alert("수정 실패") );
    }

    const postHandler = (blog) =>{
        fetch(import.meta.env.VITE_API_URL + "/post", {
            method: "POST",
            body: JSON.stringify({
                id : blogs.value.length + 1,
                title : blog.title,
                content : blog.content,
                img : blog.img
            })
        }).then(response => response.status) 
        .then(result => result == 201? router.push("/") : alert("수정 실패") );


    }
    // fetch는 promise로 뭐?

    const deleteHandler =(id) =>{
        fetch(import.meta.env.VITE_API_URL + "/post/" + id, {
            method: "DELETE"
        }).then(response => response.status)
        .then(data => data == 200? router.push("/") : alert("삭제 실패"));
    }

    return {
        blogs,
        detailsBlog,
        postBlog,
        blogHandler,
        detailsHandler,
        modifyHandler,
        postHandler,
        deleteHandler
    }
} )
