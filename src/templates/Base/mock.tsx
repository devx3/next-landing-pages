import { BaseProps } from '.';
import GridText from '../../components/GridText';
import { mock as gridMock } from '../../components/GridText/mock';
import { mock as linksMock } from '../../components/NavLinks/mock';

export const mock = {
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: 'http://localhost',
  },
  footerHtml: `<p>Text aqui seu arrombado <a href="#">DevX3</a></p>`,
} as BaseProps;
