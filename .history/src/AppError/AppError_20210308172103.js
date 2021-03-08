import React, { Component } from "react";

class AppError extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch = (error , message) {
          this.setState({hasError : true, errorMessage : error})
  }

  render() {
    return <h1>Something went Wrong</h1>;
  }
}
