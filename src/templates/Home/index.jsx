import React from 'react';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridText } from '../../components/GridText';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import Head from 'next/head';
import P from 'prop-types';
import config from '../../config';

export const Home = ({ data }) => {
  data = data[0];

  const { menu, sections, footerHtml, title } = data;
  const { links, text, link, srcImg } = menu;
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${data.slug}-${index}`;

        switch (component) {
          case 'section.section-two-columns':
            return <GridTwoColumns key={key} {...section} />;

          case 'section.section-content':
            return <GridContent key={key} {...section} />;

          case 'section.section-grid-text':
            return <GridText key={key} {...section} />;

          case 'section.section-grid-image':
            return <GridImage key={key} {...section} />;

          default:
            break;
        }
      })}
    </Base>
  );
};

Home.propTypes = {
  data: P.array,
};
