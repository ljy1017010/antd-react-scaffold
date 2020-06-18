import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>页面暂时无法使用，请刷新后重试</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
