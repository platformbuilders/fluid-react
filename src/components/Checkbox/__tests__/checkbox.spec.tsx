import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Checkbox, { CheckboxProps } from '..';
import theme from '../../../theme';

const defaultProps: CheckboxProps = {
  checked: false,
  onChange: jest.fn(),
  label: 'Text',
  name: 'Text',
};

describe('Component: Checkbox', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Checkbox {...defaultProps} />
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  // test('check props default props', () => {
  //   // when
  //   const component = shallow(
  //     <Button {...defaultProps} disabled variant="secondary">
  //       {defaultContent}
  //     </Button>,
  //   );

  //   // then
  //   const child = component.children();

  //   expect(child.contains(defaultContent)).toEqual(true);
  // });

  test('should call onPress when pressed', () => {
    // should
    const mockFunction = jest.fn();
    const component = shallow(
      <Checkbox {...defaultProps} onChange={mockFunction} />,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    component
      .find('.fluid-checkbox')
      .at(0)
      .simulate('change', { target: { name: 'checked', value: true } });
    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
