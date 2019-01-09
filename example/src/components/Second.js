import React from "react";
import styled from "styled-components";
import FunctionBox from "./FunctionBox";
import Third from "./Third";

const SecondContainer = styled.main`
  margin: 25;
  background: darkgrey;
  height: 500px;
  max-width: 100%;
  h5 {
    color: red;
    &:hover {
      color: white;
    }
  }
  .flex{
      display: flex;
      width: 100%;
      justify-content: space-around;
  }
`;

const Second = () => {
  return (
    <SecondContainer>
      <h5>I am the second. I am inside top.</h5>
      <div className="flex">
        <FunctionBox />
        <Third />
      </div>
    </SecondContainer>
  );
};
export default Second;
