import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import { MenuLink } from './index.jsx';

describe('<MenuLink />', () => {
  it('Should render with with a self link', () => {
    renderTheme(<MenuLink link="http://localhost">Link</MenuLink>);
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('target', '_self');
  });
  it('Should render a link to open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Link
      </MenuLink>,
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toHaveAttribute('target', '_blank');
  });
  it('Should render a link to open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Link
      </MenuLink>,
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toMatchInlineSnapshot(`
            .c0 {
              display: block;
              font-size: 1.6rem;
              -webkit-text-decoration: none;
              text-decoration: none;
              padding: 1.6rem;
              color: #0A1128;
              position: relative;
            }

            .c0::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 0;
              height: 0.2rem;
              background: #dc143c;
              -webkit-transition: all 300ms ease-in-out;
              transition: all 300ms ease-in-out;
            }

            .c0:hover::after {
              left: 25%;
              width: 50%;
            }

            <a
              class="c0"
              href="http://localhost"
              target="_self"
            >
              Link
            </a>
        `);
  });
});
