import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextContainer } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextContainer} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.large};

    @media ${theme.media.ltMedia} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      position: relative;
      left: 5rem;
      margin-bottom: 15px;
    }

    ${HeadingContainer}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      top: -2rem;
      font-size: ${theme.fonts.sizes.huge};
      left: -5rem;
      transform: rotate(-10deg);
    }
  `}
`;
