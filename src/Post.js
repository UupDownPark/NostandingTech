import React from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

const Post = ({ setAddress }) => {
  const onCompletePost = (data) => {
    setAddress(data);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "30%",
    width: "400px",
    height: "400px",
    border: "2px solid black",
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose //입력시 자동닫기
        onComplete={onCompletePost}
      />
    </>
  );
};

export default Post;
