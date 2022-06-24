import { shallow } from 'enzyme';
import faker from 'faker';
import { ThemeProvider } from 'styled-components';

import Radio from '..';
import { theme } from '../../../config/helpers';
import { RadioProps as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {
  checked: true,
  label: defaultContent,
  onChange: jest.fn(),
};

describe('Component: Radio', () => {
  test('snapshots with default props', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Radio {...defaultProps} />
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });

  test('snapshots with another props', () => {
    const valueMock = faker.random.words();
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Radio {...defaultProps} size="medium" value={valueMock} />
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });

  test('should call onChange when pressed', () => {
    // should
    const handleChange = jest.fn();

    // when
    const component = shallow(
      <Radio onChange={handleChange} variant="secondary" />,
    );

    // then
    expect(handleChange).not.toHaveBeenCalled();
    component.simulate('change');
    expect(handleChange).toHaveBeenCalled();
  });
});
