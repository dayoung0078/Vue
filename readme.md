모던자바스크립트 사이트
자바스크립트의 코어단을 알아야 하는 이유?  뷰로 구성되어있음.
싱글페이지 어플리케이션 SPA

브라우저에 url주소를 입력한다 라고 하면 - 컴퓨터의 위치를 식별해서 (포트번호) url리소스를 화면을 요청하는 것 
사용자에게 응답해 줄 수 있는 페이지가 여러개 있다 생각하면 됨.

브라우저 렌더링 엔진이 HTML 구문을 인식하고 해석해서 나타내줌

page1 -> f1라는 페이지 서버에 요청하면
템플릿엔진이 html코드로 보내줌.
그러면 브라우저가 html코드를 읽어서 구현해줌

페이지를 이동할때마다 깜빡 거리는것 <- 페이지가 바뀌는것임.

하지만 싱글페이지 어플리케이션은

INDEX 와 프론트앤드서버가 따로 있음

INDEX에는 모든 소스 코드가 다 담겨있음. 
그래서 사용자가 f1페이지에서 f2페이지를 원하면 index에서다 해결됨.
그래서 페이지를 바꿀필요가 없다. 이말은 즉 리소스를 아낄 수 있다 (서버자원을 아낄 수 있다.) (장점)

이걸 싱글페이지 어플리케이션이라 부름니다~

v-text가 뭐야? 알아보기
v-bind가 뭐야?

    <h5>Raw Html</h5>
    <p>Using text Interpolation : {{rawHtml}}</p>
    <p>using v-html directive : <span v-html="rawHtml"></span></p>   

    뭐라는거야 알아봐 

    <div :id="skipId">{{skipValue}}</div>

    반응성변수, 일반변수 차이

            <div :class="{active : isActive, static:size}">{{isActive}}</div>

            훅스?
            computed? 이해안가
            다중 속성 바인딩?
            truthy, false?
            <template> <- 쓰는 목적?
            인플레이스 패치 전략?

            라이프사이클?
            - 싱글 페이지 애플리케이션(Single Page Application, SPA)의 라이프사이클은 전통적인 웹 애플리케이션과는 다르게 클라이언트 측에서 대부분의 작업이 수행되며, 페이지 리로드 없이 콘텐츠가 동적으로 업데이트됩니다. SPA의 라이프사이클은 일반적으로 다음과 같은 단계를 거칩니다:





0527 practice-index.html

    <div id="app"> //Vue 애플리케이션이 마운트될 HTML 요소입니다.
        <header> // 페이지의 헤더 부분을 나타냅니다.
            <h1> vue template 익숙해지기</h1> //페이지의 제목을 설정합니다.

            <div class="container"> // 데이터를 반복하여 표시할 컨테이너입니다.
                <div v-for="item in jsonData" :key="item.id" class="character"> 
                //v-for 디렉티브는 jsonData 배열을 반복하며 각 항목에 대해 HTML 요소를 생성합니다. :key 속성은 Vue가 각 항목을 고유하게 식별할 수 있도록 합니다.
                    <h5>이름 : {{item.name}}</h5> // 각 항목의 이름을 표시합니다.
                    <p>{{item.introduction}}</p> // 각 항목의 소개 문구를 표시합니다.
                    <div class="imgContainer"> // 이미지를 포함하는 컨테이너입니다.
                        <img :src=item.img /> // 각 항목의 이미지를 표시합니다. :src는 Vue의 바인딩 문법으로, item.img 값을 이미지의 src 속성에 할당합니다.
                    </div>
            </div>
            </div>
            
        </header>
        

    </div>
    
    <script>
        const { createApp } = Vue // Vue의 createApp 함수를 가져옵니다.
        createApp({
            setup() { // Vue 애플리케이션을 생성합니다. setup 함수 안에 컴포넌트의 로직을 작성합니다.
                const jsonData = scholar; // scholar라는 데이터를 jsonData 변수에 할당합니다. scholar는 JSON 데이터 객체여야 합니다.
                return {
                    jsonData
                } // jsonData를 컴포넌트의 데이터로 반환하여 템플릿에서 사용할 수 있게 합니다.
            },
        }).mount("#app") // Vue 애플리케이션을 #app 요소에 마운트합니다.

    </script>


            <div id="app">: Vue 애플리케이션이 마운트될 HTML 요소입니다.
<header>: 페이지의 헤더 부분을 나타냅니다.
<h1>: 페이지의 제목을 설정합니다.
<div class="container">: 데이터를 반복하여 표시할 컨테이너입니다.
<div v-for="item in jsonData" :key="item.id" class="character">: v-for 디렉티브는 jsonData 배열을 반복하며 각 항목에 대해 HTML 요소를 생성합니다. :key 속성은 Vue가 각 항목을 고유하게 식별할 수 있도록 합니다.
<h5>이름 : {{item.name}}</h5>: 각 항목의 이름을 표시합니다.
<p>{{item.introduction}}</p>: 각 항목의 소개 문구를 표시합니다.
<div class="imgContainer">: 이미지를 포함하는 컨테이너입니다.
<img :src="item.img" />: 각 항목의 이미지를 표시합니다. :src는 Vue의 바인딩 문법으로, item.img 값을 이미지의 src 속성에 할당합니다.

const { createApp } = Vue: Vue의 createApp 함수를 가져옵니다.
createApp({ setup() { ... } }): Vue 애플리케이션을 생성합니다. setup 함수 안에 컴포넌트의 로직을 작성합니다.
const jsonData = scholar;: scholar라는 데이터를 jsonData 변수에 할당합니다. scholar는 JSON 데이터 객체여야 합니다.
return { jsonData }: jsonData를 컴포넌트의 데이터로 반환하여 템플릿에서 사용할 수 있게 합니다.
.mount("#app"): Vue 애플리케이션을 #app 요소에 마운트합니다.


트리거?
imgcnt - 이미지카운터 함수


<div id="step04"> 많이 쓰임
    <p>단일 선택: {{selected}}</p>
    <select v-model="selected" @change="check">
- Vue.js에서 드롭다운(select) 요소를 사용하여 사용자의 선택을 데이터 모델과 바인딩하고, 선택이 변경될 때 특정 메서드를 호출하는 방식
이를 통해 사용자 인터페이스와 데이터 모델 간의 양방향 데이터 바인딩과 이벤트 처리를 구현

        <!-- 반응성 변수를 selected로 준것. -->
        <option value="apple"> apple</option>
        <option value="pineapple"> pineapple</option>
        <option value="grape"> grape</option>

    </select>

</div>

만드는 법

셀렉트박스부터 만든다.
<select>안에
<option>을 만든다.
근데 옵션이 두가지가 있다. 인물등록, 스킬등록
오늘 배운 v-model="type" <-type은 변수다. v-model의 반응성 변수!
            <!-- 등록 폼  (이렇게 주석을 달아줘야 한다. 그래야 안헷갈린다.-->
            <select v-model="selected" @change="check">
                <option value="character">인물등록</option>
                <option value="skill">스킬등록</option>
            </select>
            <div class="inputbox"> // css 글자가 진해진다
            인풋박스 밖에 등록버튼이 들어있다. 그러니 인풋박스 밖으로 빼야함

            </div>

https://unpkg.com/vue@3/dist/vue.global.js <- 이거 쳐서 보면 좌라락 나오는데 자바로 가져오는것임.
파일을 압축시킨건 min.js로 나타남 

<script>아래 const정의, 








저도 샘 수업 진짜 빨라서 못따라갈때 많아용ㅎㅎ ㅠㅠ
그럴때는 듣다가 모르는 건 무조건 메모장이나 readme에 써놓거나 코드를 아예 복붙해놔요!
저도 질문을 잘 못하는 편이라서 ㅠㅠ
단어도 좋고, 시간 조금 괜찮으면 어디에서 막힌건지도 같이 적습니다.
