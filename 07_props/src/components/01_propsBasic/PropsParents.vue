    <script setup>
        import { provide, ref, readonly } from "vue";
        import propsChild from './PropsChild.vue';
        import DarkMode from './DarkMode.vue';
        import ReadProps from './ReadProps.vue';
    // .vscode node_modules 안에 있는 @vue를 받아오는것이다. ref = 반응형변수
    // provide <-공급자. 
        



        const message = ref("hello");
        const darkState = ref(false);
        // 다크스테이트는 불리언타입 (false) ref 반응형 변수를 boolean 타입으로 만듦
        const readValue = ref("vue는 재미있다..?");



        // provide("data",{message, darkMode});
        provide("message", message);
        provide("darkState", darkState);
        provide("readValue", readonly(readValue));

        provide("childDark", readonly(darkState));
        // readonly 는 메서드다. 뒤에 소괄호가 있기때문에
        // readonly는 읽기만 할 수 있다. 부모가 자식에게 전달할 때, 읽기만 할수있게끔 조작을 막을 수 있다.

        
    // {} 객체 형식으로 데이터를 전달해줌 -> 참조연산자처럼 다른 걸 참조할 수 있다.

    </script>
    <!-- 
        prop
        부모에서 자식 컨포넌트로 데이터를 전달하는 경우 우리는 다양한 <slot>을 이용할 수 있었다.
        하지만 slot의 경우 콘텐츠를 전달하기 위해 사용하는 것으로 단일 데이터를 전달하는 경우 맞지 않으며
        부모에게 전달 받은 데이터를 전달하여 조작하는데도 어려움이 있다.
        이러한 경우 우리는 데이터만 전달하기 위한 용도로 props를 사용할 수 있다.    
    -->

    <template>
        <!-- template은 화면에 렌더링될때, 템플릿은 없어지고 랜더링됨. 두가지의 형제 노드를 반환해줌. -->
        <div :class="{container:true, dark:darkState}">
            props 입력 <input v-model="message"/>
        <!-- <div class="container dark"> </div> -->
    <!-- slot 할때 동적으로 cs로 바꿔줘야 할때가 있다 -->
    <!-- v-on : 이벤트 발생시킬때, v-bind - 기본 html 속성에다가  -->


        </div>
        <propsChild/>
        <br>
        <DarkMode/>
        <ReadProps/>
    </template>

    <style scoped>
    .container {
        border :1px solid;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dark {
        background-color: black;
        color: white;
    }
    </style>