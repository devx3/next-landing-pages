import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from './index.jsx';

describe('<Footer />', () => {
  it('Should render with default values', () => {
    const { container } = renderTheme(<Footer html={'<h1>Hello</h1>'} />);
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
.c4 {
  font-size: 1.6rem;
}

.c2 {
  max-width: 120rem !important;
  margin: 0 auto;
  padding: 3.2rem;
  width: 100%;
}

.c0 {
  border-top: 1px solid #DDDDDD;
  text-align: center;
}

.c0 a {
  -webkit-text-decoration: none;
  text-decoration: none;
}

.c0 .c3 p {
  font-size: 1.2rem;
}

.c0 .c1 {
  padding-top: 0;
  padding-bottom: 0;
}

<div>
  <div
    class="c0"
  >
    <div
      class="c1 c2"
    >
      <div
        class="c3 c4"
      >
        <h1>
          Hello
        </h1>
      </div>
    </div>
  </div>
</div>
`);
  });
});
