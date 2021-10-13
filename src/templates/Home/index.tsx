import React from 'react';
import { Base } from '../Base';
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridImage, GridImageProps } from '../../components/GridImage';
import Head from 'next/head';
import config from '../../config';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type SectionProps = (
  | GridImageProps
  | GridTextProps
  | GridTwoColumnsProps
  | GridContentProps
) & { component: string };

export type PageData = {
  title: string;
  footerHtml: string;
  slug: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type HomeProps = {
  data: PageData[];
};

export const Home = ({ data }: HomeProps) => {
  const { menu, sections, slug, footerHtml, title } = data[0];
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
        const key = `${slug}-${index}`;

        switch (component) {
          case 'section.section-two-columns':
            return (
              <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
            );

          case 'section.section-content':
            return <GridContent key={key} {...(section as GridContentProps)} />;

          case 'section.section-grid-text':
            return <GridText key={key} {...(section as GridTextProps)} />;

          case 'section.section-grid-image':
            return <GridImage key={key} {...(section as GridImageProps)} />;

          default:
            break;
        }
      })}
    </Base>
  );
};
