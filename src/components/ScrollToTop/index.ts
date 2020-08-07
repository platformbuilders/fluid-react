import { Component, ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class ScrollToTop extends Component<RouteComponentProps> {
  componentDidUpdate(prevProps: any): void {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render(): ReactNode {
    const { children } = this.props;
    return children;
  }
}

export default withRouter(ScrollToTop);
