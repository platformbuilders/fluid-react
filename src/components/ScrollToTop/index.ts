import { FC, useEffect, ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { usePrevious } from '../../utils/hooks';

interface Props extends RouteComponentProps {
  children: ReactElement<any>;
}

const ScrollToTop: FC<Props> = ({ children, location }) => {
  const previousLocation = usePrevious(location);
  useEffect(() => {
    if (location.pathname !== previousLocation?.pathname) {
      window.scrollTo(0, 0);
    }
  }, [location, previousLocation]);

  return children;
};

export default withRouter(ScrollToTop);
