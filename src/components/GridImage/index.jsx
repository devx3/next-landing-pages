import * as Styled from './styles.js';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export function GridImage({
  title,
  description,
  grid = [],
  background = false,
  sectionId = '',
}) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" size="huge" uppercase darkMode={background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item, index) => (
            <Styled.GridItem key={`${index}-${item.altText}`}>
              <Styled.Image src={item.srcImage} alt={item.altText} />
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImage: P.string.isRequired,
    }),
  ),
  sectionId: P.string,
};
