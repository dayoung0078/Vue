<!-- 콘텐츠를 보여주는곳 -->
<!-- slot은 뷰에서 쓰는 태그. 뷰에서만 고유한 네임을 갖는다. 네임은 슬롯에 이름을 붙여준다. 
    왜 이름을 붙여주는것이냐? -->
<template>
    <slot name="name"></slot>
    <slot name="founder"></slot>
    <slot name="img"></slot>

</template>