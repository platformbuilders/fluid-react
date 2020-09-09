import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });

// Mocks
jest.mock('@platformbuilders/helpers', () => ({
  getTheme: jest.fn(),
}));
