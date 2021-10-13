import { HeadingProps } from '.';
import styled, { css, DefaultTheme } from 'styled-components';

const titleSize = (theme: DefaultTheme, size: string) => {
  return css`
    font-size: ${eval(`theme.fonts.sizes.${size}`)};
    ${mediaFont(theme)}
  `;
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.ltMedia} {
    font-size: ${theme.fonts.sizes.biggest};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, darkMode, size, uppercase }) => css`
    color: ${darkMode ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize(theme, size)};
    ${titleCase(uppercase)};
  `}
`;
