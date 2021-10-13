import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  imgSrc: string;
  darkMode?: boolean;
  sectionId?: string;
  component?: string;
};

export function GridTwoColumns({
  title,
  text,
  imgSrc,
  darkMode = false,
  sectionId = '',
}: GridTwoColumnsProps) {
  return (
    <SectionBackground background={darkMode} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase darkMode={darkMode}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={imgSrc} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
}
