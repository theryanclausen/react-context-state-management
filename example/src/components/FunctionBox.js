import React from "react";
import styled from "styled-components";
import { OurConsumer } from "../context";

const FunctionContainer = styled.div`
  margin: 25px;
  height: 200px;
  width: 200px;
  background: green;
`;

export default () => {
  return (
    <OurConsumer>
      {context => (
        <FunctionContainer>
          <h2>I do functions</h2>
          <button onClick={context.actions.plus5}>+5</button>
        </FunctionContainer>
      )}
    </OurConsumer>
  );
};
