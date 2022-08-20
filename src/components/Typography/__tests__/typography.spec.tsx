import { shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { faker } from '@faker-js/faker';

import Typography from '..';
import { theme } from '../../../config/helpers';
import { TypographyType as Props } from '../../../types';

const defaultContent = 'Text';
const defaultProps: Props = {};

describe('Component: Typography', () => {
  test('snapshots', () => {
    const component = shallow(
      <ThemeProvider theme={theme}>
        <Typography {...defaultProps}>{defaultContent}</Typography>
      </ThemeProvider>,
    );

    expect(component).toMatchSnapshot();
  });

  test('check props', () => {
    // when
    const mockContent = faker.random.word();
    const component = shallow(
      <Typography {...defaultProps} variant="h1">
        {mockContent}
      </Typography>,
    );

    // then
    const { variant } = component.props();

    expect(variant).toEqual('h1');
    expect(component.children().text()).toEqual(mockContent);
  });
});
