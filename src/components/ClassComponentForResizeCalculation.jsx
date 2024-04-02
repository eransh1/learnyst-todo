import React, { Component } from 'react';

class ClassComponentForResizeCalculation extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.props.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.props.updateWidth);
  }

  render() {
    return (
      <>  
      </>
    );
  }
}

export default ClassComponentForResizeCalculation;
