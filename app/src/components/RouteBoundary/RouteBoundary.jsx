import React from 'react';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import './RouteBoundary.css';

class RouteBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="routeError">
          <p>Não foi possível carregar esta página.</p>
          <button type="button" onClick={this.handleRetry}>
            Tentar novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export function RouteFallback() {
  return <LoadingScreen />;
}

export default RouteBoundary;
