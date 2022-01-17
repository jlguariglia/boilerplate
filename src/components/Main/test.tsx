import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    );

    expect(
      screen.getByRole('heading', { name: /Next App/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveStyle({ 'background-color': '#726a95' });
  });
});
