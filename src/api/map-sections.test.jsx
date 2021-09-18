import {
  mapSections,
  sectionContent,
  sectionImageGrid,
  sectionTextGrid,
  sectionTwoColumns,
} from './map-sections';

import pageFakeData from './data.json';

describe('map-sections-two-columns', () => {
  it('Should map Two Columns Section with no data', () => {
    const section = sectionTwoColumns(undefined);
    expect(section).toEqual({
      component: null,
      text: '',
      title: '',
      darkMode: false,
      sectionId: '',
      imgSrc: '',
    });
  });
  it('Should map Two Columns Section with data', () => {
    const section = sectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'January brings us firefox 85',
      description: 'Description',
      metadata: {
        background: true,
        name: 'home',
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(section).toEqual({
      component: 'section.section-two-columns',
      text: 'Description',
      title: 'January brings us firefox 85',
      darkMode: true,
      sectionId: 'home',
      imgSrc: 'a.svg',
    });
  });
});

describe('map-sections', () => {
  it('Should map Sections with no data', () => {
    const section = mapSections(undefined);
    expect(section).toEqual([]);
  });

  it('Should map Sections with no data', () => {
    const section = mapSections(pageFakeData[0].sections);
    expect(section[0].component).toBe('section.section-two-columns');
  });

  it('Should map Sections with unknowed component data', () => {
    const section = mapSections([
      {
        sections: [
          {
            __component: 'section.section-unknowed',
            title: 'January brings us firefox 85',
            description: 'abc',
          },
        ],
      },
    ]);
    expect(section[0].sections[0].__component).toBe('section.section-unknowed');
  });

  it('Should map Content Section with no data', () => {
    const section = sectionContent(undefined);
    expect(section).toEqual({
      component: null,
      html: '',
      title: '',
      darkMode: false,
      sectionId: '',
    });
  });
  it('Should map Content Section with data', () => {
    const section = sectionContent({
      __component: 'section.section-content',
      title: 'titulo',
      content: '<p>Hell</p>',
      metadata: {
        background: false,
        section_id: 'Hell-Yeah',
      },
    });
    expect(section).toEqual({
      component: 'section.section-content',
      html: '<p>Hell</p>',
      title: 'titulo',
      darkMode: false,
      sectionId: 'Hell-Yeah',
    });
  });
  it('Should map TextGrid Section with data', () => {
    const section = sectionTextGrid({
      __component: 'section.section-grid',
      title: 'My Grid',
      description: 'Opa',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'abc',
        },
        {
          title: 'Teste 2',
          description: 'dfg',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
      __v: 2,
      id: '61111176b8ae7e54f3f0ee38',
    });
    expect(section).toEqual({
      component: 'section.section-grid-text',
      description: 'Opa',
      title: 'My Grid',
      background: true,
      sectionId: 'grid-one',
      grid: [
        {
          title: 'Teste 1',
          description: 'abc',
        },
        {
          title: 'Teste 2',
          description: 'dfg',
        },
      ],
    });
  });
  it('Should map TextGrid Section with no data', () => {
    const section = sectionTextGrid(undefined);
    expect(section).toEqual({
      component: 'section.section-grid-text',
      description: '',
      title: '',
      background: false,
      sectionId: '',
      grid: [],
    });
  });

  it('Should map ImageGrid Section with data', () => {
    const section = sectionImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'Description',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'a',
            url: 'a.jpg',
          },
        },
        {
          image: {
            alternativeText: 'b',
            url: 'b.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });
    expect(section).toEqual({
      component: 'section.section-grid-image',
      description: 'Description',
      title: 'Gallery',
      background: false,
      sectionId: 'gallery',
      grid: [
        {
          altText: 'a',
          srcImage: 'a.jpg',
        },
        {
          altText: 'b',
          srcImage: 'b.jpg',
        },
      ],
    });
  });
  it('Should map ImageGrid Section with no data', () => {
    const section = sectionImageGrid(undefined);
    expect(section).toEqual({
      component: 'section.section-grid-image',
      description: '',
      title: '',
      background: false,
      sectionId: '',
      grid: [],
    });
  });
});
