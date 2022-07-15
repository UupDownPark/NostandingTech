import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
const TagDiv = styled.div`
  align-self: start;
  margin: 4px;
  font-size: 15px;
  font-weight: 600;
`;
const CheckInput = styled.input`
  width: 67%;
  height: 6vh;
  font-size: 15px;
  margin-right: 3%;
`;
const CheckBtn = styled.button`
  height: 6vh;
  width: 30%;
  border-radius: 0.3rem;
  background-color: rgb(21, 64, 99);
  color: white;
  &[disabled] {
    cursor: revert;
    transform: revert;
    background-color: rgb(65, 65, 65);
  }
`;
const Input = styled.input`
  width: 100%;
  height: 6vh;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Addressform = () => {
  const [address, setAddress] = useState("");
  const [addressLine, setAddressLine] = useState("");
  const [popup, setPopup] = useState(false);
  return (
    <FlexCol>
      <TagDiv value={address}>* 주소지</TagDiv>
      <FlexRow>
        <CheckInput
          type="text"
          placeholder="우편번호"
          value={address.zonecode}
          disabled
        />
        <CheckBtn
          onClick={() => {
            setPopup(!popup);
          }}
        >
          주소찾기
        </CheckBtn>
      </FlexRow>
      <Input type="text" value={address.address} placeholder="주소" disabled />
      <Input
        type="text"
        placeholder="상세주소"
        value={addressLine}
        onChange={(e) => setAddressLine(e.target.value)}
      />
      {popup ? <Post setAddress={setAddress} setPopup={setPopup}></Post> : null}
    </FlexCol>
  );
};
export default Addressform;
