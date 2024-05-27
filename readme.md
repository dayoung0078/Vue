모던자바스크립트 사이트
자바스크립트의 코어단을 알아야 하는 이유?  뷰로 구성되어있음.
싱글페이지 어플리케이션

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