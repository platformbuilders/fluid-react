import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../config/helpers';
import LoadingIndicator, { Props, Sizes } from '../index';

const defaultProps: Props = {};

describe('Component: LoadingIndicator', () => {
  test('snapshots', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <LoadingIndicator {...defaultProps} />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props default props', () => {
    // when
    const component = shallow(<LoadingIndicator {...defaultProps} />);

    // then
    const { width, height, isStopped, isPaused } = component.props();

    expect(width).toEqual(Sizes.medium);
    expect(height).toEqual(Sizes.medium);
    expect(isStopped).toBeFalsy();
    expect(isPaused).toBeFalsy();
  });

  test('check props with size', () => {
    // when
    const component = shallow(
      <LoadingIndicator {...defaultProps} size="small" />,
    );

    // then
    const { width, height } = component.props();

    expect(width).toEqual(Sizes.small);
    expect(height).toEqual(Sizes.small);
  });
});
