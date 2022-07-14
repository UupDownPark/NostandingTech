import React, { useEffect } from "react";
const { kakao } = window;

console.log(kakao);
const Map = () => {
  useEffect(() => {
    let mapContainer = document.getElementById("map"); //지도를 표시할 div 공식문서에서는 HTML 활용법이 나오기때문에 react에서는 요렇게 변경해준다
    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570677), //경도 위도
      level: 3, //지도의 확대 레벨
    };
    var map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);
  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};
export default Map;
