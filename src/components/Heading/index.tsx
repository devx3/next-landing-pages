import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  darkMode?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?:
    | 'smallest'
    | 'small'
    | 'medium'
    | 'big'
    | 'biggest'
    | 'extraBig'
    | 'huge'
    | 'extraHuge';
  uppercase?: boolean;
};

export const Heading = ({
  children,
  darkMode = false,
  as = 'h1',
  size = 'extraHuge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title darkMode={darkMode} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};
