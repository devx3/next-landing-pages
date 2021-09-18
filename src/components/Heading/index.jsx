import * as Styled from './styles';
import P from 'prop-types';

export const Heading = ({
  children,
  darkMode = false,
  as = 'h1',
  size = 'extraHuge',
  uppercase = false,
}) => {
  return (
    <Styled.Title darkMode={darkMode} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  darkMode: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf([
    'smallest',
    'small',
    'medium',
    'big',
    'biggest',
    'extraBig',
    'huge',
    'extraHuge',
  ]),
  uppercase: P.bool,
};
