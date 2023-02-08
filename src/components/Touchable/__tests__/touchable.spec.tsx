import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';

import Touchable, { TouchableProps } from '..';
import { theme } from '../../../config/helpers';

const defaultContent = 'Text';
const defaultProps: TouchableProps = {
  accessibility: 'accessibility',
  onPress: jest.fn(),
};

describe('Component: Touchable', () => {
  test('snapshots', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Touchable {...defaultProps}>{defaultContent}</Touchable>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const component = shallow(
      <Touchable {...defaultProps}>{mockContent}</Touchable>,
    );

    // then
    expect(component.children().text()).toEqual(mockContent);
  });

  test('should call onPress when clicked', () => {
    // should
    const mockFunction = jest.fn();
    const component = shallow(
      <Touchable {...defaultProps} onPress={mockFunction}>
        {defaultContent}
      </Touchable>,
    );

    // when
    expect(mockFunction).not.toHaveBeenCalled();
    component.simulate('click');

    // then
    expect(mockFunction).toHaveBeenCalled();
  });
});
