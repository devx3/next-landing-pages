import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.ltMedia} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.ltMedia} {
      margin-bottom: ${theme.spacings.large};
    }

    ${Heading} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${() => css``}
`;

export const Image = styled.img`
  ${() => css`
    max-width: 100%;
  `}
`;
