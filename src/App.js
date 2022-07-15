import "./App.css";
import Map from "./Map";
import styled from "styled-components";
import SimpleSlider from "./SimpleSlider";
import Addressform from "./Addressform";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Div = styled.div`
  width: 30%;
  height: 700px;
  overflow: hidden;
  margin: 5px;
  padding: 5px;
`;
const Rowdiv = styled.div`
  display: flex;
  flex-direction: row;
`;
function App() {
  return (
    <Rowdiv>
      <Div>
        <Map></Map>
      </Div>
      <Div>
        <SimpleSlider />
      </Div>
      <Div>
        <Addressform></Addressform>
      </Div>
    </Rowdiv>
  );
}

export default App;
