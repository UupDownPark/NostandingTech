import "./App.css";
import Map from "./Map";
import styled from "styled-components";
import SimpleSlider from "./SimpleSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Div = styled.div`
  width: 30%;
  height: 700px;
`;
function App() {
  return (
    <div>
      <Div>
        <Map></Map>
        <SimpleSlider />
      </Div>
    </div>
  );
}

export default App;
