import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
    it('should render menu with no data', () => {
        const menu = mapMenu();
        expect(menu.newTab).toBe(false);
        expect(menu.text).toBe('');
        expect(menu.srcImg).toBe('');
        expect(menu.link).toBe('');
    });
    it('should render menu with data', () => {
        const menu = mapMenu({
            new_tab: false,
            logo_image: {
                url: 'a.svg',
            },
            logo: 'Logo',
            menu_item: [
                {
                    new_tab: false,
                    label: 'home',
                    url: '#home',
                },
                {
                    new_tab: false,
                    label: 'grid-one',
                    url: '#grid-one',
                },
            ],
            logo_link: '#home',
        });
        expect(menu.newTab).toBe(false);
        expect(menu.text).toBe('Logo');
        expect(menu.srcImg).toBe('a.svg');
        expect(menu.link).toBe('#home');
        expect(menu.links[0].newTab).toBe(false);
        expect(menu.links[0].children).toBe('home');
        expect(menu.links[0].link).toBe('#home');
    });
    it('should return an empty array when not links has passed.', () => {
        const links = mapMenuLinks();
        expect(links).toEqual([]);
    });
    it('should return object when links has passed.', () => {
        const links = mapMenuLinks([
            {
                new_tab: false,
                label: 'home',
                url: '#home',
            },
            {},
        ]);
        expect(links[0].newTab).toBe(false);
        expect(links[0].children).toBe('home');
        expect(links[0].link).toBe('#home');
    });
});
