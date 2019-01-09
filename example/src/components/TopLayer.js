import React from 'react'
import Second from './Second'
import styled from 'styled-components'
import { OurConsumer } from '../context';

const TopContainer = styled.main`
    margin:0 auto;
    background:blue;
    height: 1000px;
    max-width: 1888px;
    h2{
        color: white;
        &:hover{
            color:yellow;
        }
    }
    h3{
        font-size:45px;
    }
`

const TopLayer = () =>{
    return(
        <OurConsumer>
            {context => (
                <TopContainer>
            <h2>I am called Top Layer. I am inside App </h2><h3>{context.state.count}</h3>
            <Second></Second>
        </TopContainer>

            )}
        
        </OurConsumer>
    )
}
export default TopLayer