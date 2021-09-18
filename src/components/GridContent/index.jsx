import * as Styled from './styles.js';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export function GridContent({ title, html, darkMode = false, sectionId = '' }) {
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

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  darkMode: P.bool,
  sectionId: P.string,
};
