import * as Styled from './styles.js';
import P from 'prop-types';

export const SectionContainer = ({ children }) => {
    return <Styled.Container>{children}</Styled.Container>;
};

SectionContainer.propTypes = {
    children: P.node.isRequired,
};
