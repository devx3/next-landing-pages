import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 120rem !important;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;
  `}
`;
