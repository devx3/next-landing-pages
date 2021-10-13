import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

const random = () =>
  `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  const id = sectionId ? sectionId : random();
  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
