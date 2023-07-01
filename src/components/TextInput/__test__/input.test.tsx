import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import { TextInputType } from '../../../types';
import TextInput from '../index';
import TextInputMask from '../TextInputMask';

const defaultProps: TextInputType = {
  id: 'input-test',
  type: 'text',
  value: '',
  label: 'Input',
  name: 'input',
  placeholder: 'Input',
  variant: 'filled',
};

describe('Component: TextInput', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <TextInput {...defaultProps} />
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });

  test('should change value input to Input', () => {
    // should
    const handleChange = jest.fn();

    // when
    const component = shallow(
      <TextInput {...defaultProps} onChange={handleChange} />,
    );
    component.find(defaultProps.id).simulate('change', {
      target: { name: 'value', value: 'Input' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  test('should change value with mask', () => {
    // should

    // when
    const component = shallow(
      <TextInputMask {...defaultProps} maskType="cep" value="58071000" />,
    );
    component.find(defaultProps.id).simulate('change', {
      target: { name: 'value', value: '58071000' },
    });
    expect(component.find(defaultProps.id).props().value).toBe('58071000');
  });
});
