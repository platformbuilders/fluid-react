import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';

import Paper from '..';
import theme from '../../../theme';

const defaultContent = 'Text';
const defaultProps = {};

describe('Component: Paper', () => {
  test('snapshots', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Paper {...defaultProps}>{defaultContent}</Paper>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const component = shallow(<Paper {...defaultProps}>{mockContent}</Paper>);

    // then
    expect(component.children().text()).toEqual(mockContent);
  });
});
