import { mapData } from './map';

describe('map-data', () => {
    it('should map even if there is no data', () => {
        const pageData = mapData();
        expect(pageData[0].footerHtml).toBe('');
        expect(pageData[0].slug).toBe('');
        expect(pageData[0].title).toBe('');
    });

    it('should map when has data', () => {
        const pageData = mapData([
            {
                title: 'Hell Yeah',
                slug: 'hell-yeah',
                footer: {
                    content: '<p>Feito com ódio &lt;3</p>',
                },
            },
        ]);
        expect(pageData[0].footerHtml).toBe('<p>Feito com ódio &lt;3</p>');
        expect(pageData[0].slug).toBe('hell-yeah');
        expect(pageData[0].title).toBe('Hell Yeah');
    });
});
