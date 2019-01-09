import React from 'react'
import styled from 'styled-components'
import Fourth from './Fourth'
import { OurConsumer } from '../context';

const ThirdContainer = styled.main`
    margin:25px;
    background:darkred;
    height: 400px;
    width: 500px;
    color: lightblue;
    h5{
        
        &:hover{
            color:white;
        }
    }
`

export default () => {
  return (
      <OurConsumer>{
          context => (
             <ThirdContainer>
        <h5>I am third. I am in second </h5><p>{context.state.word}</p> 
        <Fourth></Fourth>
    </ThirdContainer> 
          )
      }
    
    </OurConsumer>
  )
}
