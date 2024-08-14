import React from "react";
import styled from "styled-components";

const RectangleDiv = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #D3D3D3;
  margin: 0 auto;
`

function Rectangle() {
    return <RectangleDiv />;
}

export default Rectangle;