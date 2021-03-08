import React, { Component } from "react";

class AppError extends Component {
  
    this.state = {
        hasError : false,
        errorMessage: ""
    }

    render() {
    return <h1>Something went Wrong</h1>;
  }
}
