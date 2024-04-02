import React, { Component } from 'react';

class ClassComponentForResizeCalculation extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", this.props.updateWidth);
    }
    
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {

      window.removeEventListener("resize", this.props.updateWidth);
    }
  }

  render() {
    return (
      <>  
      </>
    );
  }
}

export default ClassComponentForResizeCalculation;
