import { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class ScrollToTop extends Component<RouteComponentProps> {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
export default withRouter(ScrollToTop);
