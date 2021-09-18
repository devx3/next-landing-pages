import { mapSections } from './map-sections';
import { mapMenu } from './map-menu';
export const mapData = (pageData = [{}]) => {
  return pageData.map((page) => {
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
