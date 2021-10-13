/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridContentProps } from '../components/GridContent';
import { GridElementsProps, GridImageProps } from '../components/GridImage';
import { GridProps, GridTextProps } from '../components/GridText';
import { GridTwoColumnsProps } from '../components/GridTwoColumns';
import { SectionProps } from '../templates/Home';

export const mapSections = (sections = [] as any): SectionProps[] => {
  return sections.map((section) => {
    const { text_grid = [], image_grid = [] } = section;

    if (section.__component === 'section.section-two-columns') {
      return sectionTwoColumns(section);
    }
    if (section.__component === 'section.section-grid') {
      if (text_grid.length > 0) {
        return sectionTextGrid(section);
      }
      if (image_grid.length > 0) {
        return sectionImageGrid(section);
      }
    }
    if (section.__component === 'section.section-content') {
      return sectionContent(section);
    }
    return section;
  });
};

export const sectionTwoColumns = (section = {} as any): GridTwoColumnsProps => {
  const {
    __component: component = null,
    description: text = '',
    title = '',
    metadata: {
      background: darkMode = false,
      section_id: sectionId = '',
    } = false,
    image: { url: imgSrc = '' } = '',
  } = section;

  return {
    component,
    text,
    title,
    darkMode,
    sectionId,
    imgSrc,
  };
};

export const sectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = null,
    content: html = '',
    title = '',
    metadata: {
      background: darkMode = false,
      section_id: sectionId = '',
    } = false,
  } = section;

  return {
    component,
    html,
    title,
    darkMode,
    sectionId,
  };
};

export const sectionTextGrid = (section = {} as any): GridTextProps => {
  const {
    description = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    description,
    title,
    background,
    sectionId,
    grid: mapTextGrid(grid),
  };
};

export const mapTextGrid = (grid = [] as any): GridProps[] => {
  return grid.map((item) => {
    const { title = '', description = '' } = item;
    return {
      title,
      description,
    };
  });
};

export const sectionImageGrid = (section = {} as any): GridImageProps => {
  const {
    description = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    description,
    title,
    background,
    sectionId,
    grid: mapImageGrid(grid),
  };
};

export const mapImageGrid = (grid = []): GridElementsProps[] => {
  return grid.map((image) => {
    const {
      image: { alternativeText: altText = '', url: srcImage = '' } = '',
    } = image;

    return {
      altText,
      srcImage,
    };
  });
};
