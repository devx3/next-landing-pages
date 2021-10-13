import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridElementsProps = {
  altText: string;
  srcImage: string;
};

export type GridImageProps = {
  background?: boolean;
  title: string;
  description: string;
  grid?: GridElementsProps[];
  sectionId?: string;
  component?: string;
};

export function GridImage({
  title,
  description,
  grid = [],
  background = false,
  sectionId = '',
}: GridImageProps) {
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
