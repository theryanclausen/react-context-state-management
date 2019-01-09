import React, { Component, createContext } from "react";

const OurContext = createContext();

export class OurProvider extends Component {
  state = {
    word: "family tabs",
    count: 0
  };
plus5 = () => this.setState({count: this.state.count+5})
minus3 = () =>  this.setState({count: this.state.count-3})
  render() {
    return (
      <OurContext.Provider value={{ state: this.state , actions:{ plus5:this.plus5, minus3:this.minus3} }}>
        {this.props.children}
      </OurContext.Provider>
    );
  }
}

export const OurConsumer = OurContext.Consumer;
