import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    cursor: pointer;
  `}
`;
