import styled, { css } from 'styled-components';

const backgroundActivateColor = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};

    ${background && backgroundActivateColor(theme)}

    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
