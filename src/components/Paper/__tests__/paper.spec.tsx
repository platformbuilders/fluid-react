import { shallow } from 'enzyme';
import faker from 'faker';
import { ThemeProvider } from 'styled-components';

import Paper from '..';
import { theme } from '../../../config/helpers';

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
