/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';
import { PageData } from '../templates/Home';

export const mapData = (pageData = [{}] as any): PageData[] => {
  return pageData.map((page: any): PageData => {
    const {
      footer: { content: footerHtml = '' } = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = page;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
