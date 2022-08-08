import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    if (prevProps.children !== this.props.children) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>결과를 표시할 수 없습니다.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary;