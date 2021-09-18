export const mapMenu = (menu = {}) => {
  const {
    new_tab: newTab = false,
    logo: text = '',
    logo_link: link = '',
    menu_item: links = [],
  } = menu;
  const srcImg =
    menu.logo_image && menu.logo_image.url ? menu.logo_image.url : '';
  return {
    newTab,
    text,
    srcImg,
    link,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((map) => {
    const {
      label: children = '',
      url: link = '',
      new_tab: newTab = false,
    } = map;

    return {
      children,
      link,
      newTab,
    };
  });
};
