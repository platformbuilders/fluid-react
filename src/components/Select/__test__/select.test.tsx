import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import Select, { SelectProps as Props } from '../index';

const defaultProps: Props = {
  label: 'Gender',
  selectedValue: 'Male',
  onChange: jest.fn(),
  values: [
    {
      value: 'Male',
      label: 'Male',
    },
    {
      value: 'Female',
      label: 'Female',
    },
  ],
};

describe('Component: Select', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Select {...defaultProps} />
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });

  test('should change value to female', () => {
    // should
    const handleChange = jest.fn();

    // when
    const component = shallow(
      <Select id="select-test" {...defaultProps} onChange={handleChange} />,
    );
    component.find('#select-test').simulate('change', {
      target: { name: 'value', value: 'Female' },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
