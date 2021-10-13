import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  background?: boolean;
  title: string;
  description: string;
  grid?: GridProps[];
  sectionId?: string;
  component?: string;
};

export function GridText({
  title,
  description,
  grid = [],
  background = false,
  sectionId = '',
}: GridTextProps) {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" size="huge" uppercase darkMode={background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridItem key={item.title}>
              <Heading as="h3" darkMode={background} size="medium">
                {item.title}
              </Heading>
              <TextComponent>{item.description}</TextComponent>
            </Styled.GridItem>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
}

export default GridText;
