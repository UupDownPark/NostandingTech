import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
const StyledSlider = styled(Slider)`
  .slick-list {
    background-color: aliceblue;
    width: 1200px;
    margin: 0 auto;
  }
  .slick-slide div {
    cursor: pointer;
  }
  .slick-dots {
    bottom: -50px;
    margin-top: 100px;
  }
  .slick-track {
    overflow-x: hidden;
  }
`;
//스타일드 컴포넌트를 이용한 스타일 변경을 위와 같이 하면 된다. 본인은 프로젝트 할때 글로벌 스타일 파일에서 수정했다.ㅠㅠ
function SimpleSlider() {
  const settings = {
    //슬라이더 옵션 설정이다.
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeend: 10000,
  };
  return (
    <StyledSlider {...settings}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </StyledSlider>
  );
}
export default SimpleSlider;
