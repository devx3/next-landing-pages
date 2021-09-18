import styled, { css } from 'styled-components';

const titleSize = (theme, size) => {
  return css`
    font-size: ${eval(`theme.fonts.sizes.${size}`)};
    ${mediaFont(theme)}
  `;
};

const mediaFont = (theme) => css`
  @media ${theme.media.ltMedia} {
    font-size: ${theme.fonts.sizes.biggest};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, darkMode, size, uppercase }) => css`
    color: ${darkMode ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize(theme, size)};
    ${titleCase(uppercase)};
  `}
`;
