# B-02_02-Vue.js


## vue란?
<p>
    Vue.js는 Evan You(아직 안죽음) 가 개발한 오픈 소스 프로젝트로, Angular와 react의 장점을 결합하여 생성된 웹 애플리케이션 개발을 위한 프로그레시브 자바스크립트 프레임워크이다.<br> 단일 페이지 애플리케이션 (SPA) 및 UI 컴포넌트 개발에 매우 유용 (<-분리시켜서 레고처럼 사용가능하기에, 재사용성이 좋다)하며, 가볍고 성능이 우수한 특징을 가지고 있다. 
    
    
    뷰가 가볍고 성능이 우수한 특징은? 
    1.가벼운 크기
    작은 초기 로드 크기:
    Vue.js의 기본 라이브러리 크기는 상대적으로 작습니다. 기본 Vue 라이브러리는 약 20-30KB(gzip 압축 후) 정도로, 이는 빠른 로딩 시간을 보장합니다. 가벼운 크기는 네트워크 대역폭이 제한된 환경에서도 빠르게 로드되고 실행될 수 있게 합니다.

    2.반응형 데이터 바인딩
    반응성 시스템:
    Vue.js는 반응형 데이터 바인딩을 채택하여 데이터의 변화를 자동으로 감지하고 DOM을 업데이트합니다. Vue의 반응성 시스템은 JavaScript의 Object.defineProperty (Vue 3에서는 Proxy)를 사용하여 데이터 변화를 감지하고, 필요할 때만 DOM을 업데이트합니다. 이를 통해 불필요한 연산을 줄이고, 성능을 최적화합니다.

    3.가상 DOM (Virtual DOM)
    효율적인 DOM 업데이트:
    Vue.js는 리액트와 유사하게 가상 DOM을 사용합니다. 변경된 부분만 실제 DOM에 반영하기 때문에 DOM 업데이트의 비용을 최소화합니다. 이는 특히 대규모 애플리케이션에서 중요한 성능 향상을 제공합니다. 

    4. 컴포넌트 기반 구조
    재사용성과 유지보수성:
    Vue.js는 컴포넌트 기반 아키텍처를 채택하여 애플리케이션을 작은 단위로 분리하고, 재사용 가능한 컴포넌트로 개발할 수 있게 합니다. 이는 코드의 재사용성을 높이고, 유지보수성을 향상시킵니다. 또한, 컴포넌트 단위로 업데이트와 렌더링이 이루어져 성능을 최적화합니다.

    5. 지연 로딩 (Lazy Loading)
    필요한 순간에 로딩:
    Vue.js는 라우터(Vue Router)와 함께 사용하면 컴포넌트의 지연 로딩을 쉽게 구현할 수 있습니다. 지연 로딩은 애플리케이션의 초기 로드 시간을 줄이고, 사용자가 실제로 필요한 컴포넌트만 로드하여 전체적인 성능을 향상시킵니다.

    6. 플러그인 시스템
    확장 가능성:
    Vue.js는 플러그인 시스템을 통해 기능을 확장할 수 있습니다. 필요한 기능만 플러그인으로 추가하여 기본 라이브러리의 가벼움을 유지할 수 있습니다. 이는 필요하지 않은 기능을 배제하고, 애플리케이션의 성능을 최적화할 수 있게 합니다.

    7. 정적 자산 관리
    빌드 도구와의 통합:
    Vue.js는 webpack, Rollup 같은 빌드 도구와의 통합을 통해 정적 자산을 효율적으로 관리합니다. 이를 통해 코드 스플리팅, 트리 쉐이킹 등의 최적화 기법을 활용하여 최종 번들을 작고 빠르게 유지할 수 있습니다.


    <br>

    Vue.js는 MVVM(Model-View-ViewModel) 아키텍처 패턴을 기반으로 하며, 선언적인 구문을 사용하여 데이터와 DOM 요소 사이의 바인딩을 수행한다.

    MVVM(Model-View-ViewModel) 아키텍처 패턴? 소프트웨어 디자인 패턴 중 하나
    특히 사용자 인터페이스(UI)를 가진 애플리케이션에서 많이 사용됩니다. 이 패턴은 애플리케이션의 비즈니스 로직(Model), 사용자 인터페이스(View), 그리고 이 둘 사이의 커뮤니케이션을 담당하는 ViewModel로 분리하여 코드의 유지보수성과 테스트 가능성을 향상시킵니다.
    
    - MVVM의 구성 요소
    
    Model:
    역할: 애플리케이션의 데이터와 비즈니스 로직을 관리합니다. 데이터베이스나 웹 API와의 통신을 담당하며, 데이터를 가져오거나 저장하는 로직을 포함합니다.
    특징: Model은 View나 ViewModel에 대해 전혀 알지 못합니다. 독립적으로 동작하며, 순수한 비즈니스 로직을 포함합니다

    View:

    역할: 사용자에게 데이터를 표시하고, 사용자로부터 입력을 받습니다. HTML, CSS, JavaScript와 같은 UI 요소를 포함합니다.
    특징: View는 사용자의 입력을 받아 ViewModel에 전달하며, ViewModel의 상태 변화에 따라 UI를 업데이트합니다.

    ViewModel:

    역할: Model과 View 사이의 중개자 역할을 합니다. View에서 필요한 데이터를 Model로부터 가져오고, 그 데이터를 가공하여 View에 전달합니다. 또한, View에서 발생한 사용자 이벤트를 처리하고, Model을 업데이트합니다.
    특징: ViewModel은 Model과 View에 대해 알지만, View와 직접 통신하지 않습니다. 대신, 데이터 바인딩을 통해 간접적으로 통신합니다. ViewModel은 상태를 관리하고, 비즈니스 로직을 포함할 수 있습니다.

    MVVM의 동작 방식
    1. 데이터 바인딩: View와 ViewModel 간의 데이터 바인딩을 통해 UI 요소와 데이터 모델이 동기화됩니다. 예를 들어, 사용자가 입력한 값이 ViewModel에 자동으로 반영되고,
                     ViewModel의 상태가 변경되면 UI도 자동으로 업데이트됩니다.
    2. 이벤트 처리: View에서 발생한 사용자 이벤트(예: 버튼 클릭)는 ViewModel의 메서드를 호출합니다. ViewModel은 이 이벤트를 처리하고, 필요한 경우 Model을 업데이트합니다. 
                   Model이 변경되면, ViewModel을 통해 View에 변경 사항이 반영됩니다.   

    MVVM의 장점
    1. 유지보수성:  각 구성 요소가 분리되어 있어, 특정 부분의 코드를 변경하더라도 다른 부분에 영향을 미치지 않습니다. 
                   예를 들어, UI를 변경해도 비즈니스 로직에 영향을 주지 않습니다.

                                             



    바인딩? 애플리케이션의 데이터와 DOM(Document Object Model)을 연결하여 동기화하는 방법
</p>

> 프로그레시브 자바스크립트 : 웹 개발의 새로운 패러다임으로, 웹 퍼포먼스, 접근성, 유지보수성을 향상시키는 데 중점둔 것을 의미한다.

## Vue의 주요 특징
1. 간편한 문법: Vue.js는 직관적이고 간결한 문법을 제공하여 쉽게 배울 수 있다.
2. 리액티브 데이터 바인딩: 데이터와 DOM 요소 사이의 양방향 바인딩을 지원하여 데이터의 변경이 자동으로 화면에 반영된다. (반응성은 무조건 자동으로 반영해준다.)
3. 컴포넌트 기반 아키텍처: Vue.js는 컴포넌트 기반 아키텍처를 사용하여 UI를 구성하고 재사용 가능한 코드를 작성할 수 있다. 
4. 가볍고 빠른 속도: Vue.js는 가볍고 빠른 속도로 동작하여 웹 애플리케이션의 성능을 향상시킨다.



## React VS Vue
<p>
    REACT <br>
    React에서는 Virtual Dom을 사용하여 실제 Dom과의 비교를 최소화하고 성능을 향상시키며 react에서 상태(state)(ref와 비슷함) 가 변경되면, 해당 상태를 사용하는 컴포넌트가 다시 렌더링되며 이 과정에서 Virtual Dom이 생성되고 이전 상태와 비교하여 실제 dom에 변경 사항을 적용한다. 이러한 프로세스는 react의 재조정(Reconciliation)알고리즘에 의해 관리가 된다.

    Virtual Dom? 실제 DOM(Document Object Model)과는 별개로 존재하는 가상의 DOM입니다. 이 가상 DOM은 리액트의 핵심 개념 중 하나로, 리액트가 효율적으로 UI를 업데이트하고 렌더링하는 데 중요한 역할, (실제 돔과 비교하고 아니다싶으면 지우고 다시 그린다 생각하면 됨.)
</p>
<p>
    Vue <br>
    반응성 시스템을 사용하여 데이터와 DOM을 연결한다. Vue 인스턴스의 데잍가 변경될 때마다 Vue는 해당 변경 사항을 감지하고 연결된 Dom을 업데이트한다. 이를 위해 Vue는 각 데이터 변경에 대항 응답으로 동작하는 "리액티브" 시스템을 제공한다. Vue는 변경사항을 추적하고 변경된 부분만 업데이트하여 효율적으로 Dom을 관리한다.

    리플로우와의 차이점
    Vue는 Virtual Dom을 사용하지 않아 react와 다른 접근 방식을 취한다. Vue에서는 데이터가 변경될 때마다 해당 변경을 직접 감지하고 업데이트하게 되는데 해당 과정에서 최소한의 Dom 조작만 수행하여 성능을 최적화하고 리플로우를 최소화시킨다.
</p>

해당 메서드가 언제 그려지고 언제 가져오고 어떻게 나오는지 알아야함
지금은 기본 문법을 보려고 하는것.

생명주기를 가진 메서드들->훅스

클론코딩 주말에 꼭 해봐야함. 그래야 레이아웃 구성하는 법의 감을 알게됨.

코드본다고 실력이 느는게 아닌다.

기본 표현식은 찾아가면 된다.
로직이 들어가는 순간은 라이프사이클이들어가야함


싱글페이지어플리케이션에서 라이프사이클이 가장 중요하다.

오늘 인풋창에다가 넣고 보내는것을 배울것임

컴포넌트 단위가 중요한게 각각 라이프사이클을 다르게 가져갈 수 있기 때문이다.

오늘은 v-model 할것임. 