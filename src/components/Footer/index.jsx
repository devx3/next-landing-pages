import * as Styled from './styles.js';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { TextComponent } from '../TextComponent';

export const Footer = ({ html }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
