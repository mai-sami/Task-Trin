import React, { PureComponent } from "react";
import notFound from "../../assets/Group 491.png";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError)
      return (
        <>
          <div className="intro">
            <h1 style={{ margin: "3rem", color: "#888226" }}>
              Something Is Error,Try Later
            </h1>
            <img src={notFound} alt="notFound" />
          </div>
        </>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
