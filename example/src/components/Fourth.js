import React from "react";
import styled from "styled-components";
import FunctionBox from "./FunctionBox";
import { OurConsumer } from "../context";

const FourthContainer = styled.main`
  margin: 25px;
  background: purple;
  height: 300px;
  width: 300px;
  p{
      font-size: 30px;
  }
`;

export default () => {
  return (
      <OurConsumer>
          {context =>(
              <FourthContainer>
      <h5>I am fourth. I am in third</h5><p>{context.state.count}</p>
      <FunctionBox />
    </FourthContainer>
          )}
          
      </OurConsumer>
    
  );
};
