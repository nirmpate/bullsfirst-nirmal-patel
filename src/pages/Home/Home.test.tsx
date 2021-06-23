import { render } from '../../test/test-utils';
import { Home } from './Home';

// Set API_URL in window environment
(window as any)._env_ = {
  API_URL: 'http://localhost:8080',
};

describe('<Home />', () => {
  test('renders correctly', async () => {
    const { findByText } = render(<Home />);
    expect(await findByText('Every account comes with:')).toBeTruthy();
  });
});
