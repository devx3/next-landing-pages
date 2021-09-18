import * as Styled from './styles.js';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
    return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
    children: P.node.isRequired,
};
