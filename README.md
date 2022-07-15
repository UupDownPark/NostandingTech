1.카카오맵
<br/>
-1 index.html의 바디에 <script
      type="text/javascript"
      src="//dapi.kakao.com/v2/maps/sdk.js?appkey=❤️&ribraries=services"
      class="kakaomap"
    ></script> 를 붙여줘야한다. appkey의 하트는 본인이 발급받은 자바스크립트 키와 뒤에 보이는 라이브러리는 본인이 쓰는 용도에 맞게 넣어주면 된다.
<br/> 2.슬릭슬라이더
<br/>
-1 프로젝트를 할 때 사용했을 때에는 index.html에 jquery, slick-carousel/.../slick.min.css , slick-carousel/.../slick-theme.min.css 등 여러가지를 넣었다. 그런데 자동 슬라이드가 작동이 되지 않기에 jquery 스크립트를 slick 스크립트 전에 넣어줘서 작동이 됐었다.
<br/>
-2 지금 예시로 간단히 했는데 index.html을 건들지 않고 npm install react-slick 과 slick-carousel 을 하고 app.js 파일 상단에(슬라이드 파일도 관계없다.)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 만 삽입을 했는데 자동 슬라이드까지 작동이 잘된다. 나는 무엇을 했으며 index.html 파일 넣은 많은 스크립트 태그 들과 링크 태그들은 왜 넣었는지 의문이 든다. 이 부분에 대해서는 나중에 더 알아보고 내용을 추가하도록 하겠다.
<br/>
-3 슬라이더 스타일을 변경하는 방법은 SimpleSlider.js 파일을 보면 있다. 해당 슬라이더의 클래스네임은 개발자도구 요소에서 확인 가능하다.
<br/> 3.주소지Api(다음 우편번호 서비스)
<br/>
