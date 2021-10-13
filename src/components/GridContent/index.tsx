import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridContentProps = {
  title: string;
  html: string;
  darkMode?: boolean;
  sectionId?: string;
  component?: string;
};

export function GridContent({
  title,
  html,
  darkMode = false,
  sectionId = '',
}: GridContentProps) {
  return (
    <SectionBackground background={darkMode} sectionId={sectionId}>
      <Styled.Container>
        <Heading as="h2" uppercase darkMode={darkMode}>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
}
