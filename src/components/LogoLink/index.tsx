import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  srcImg = '',
  newTab = false,
  link,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Heading size="big" uppercase darkMode={false}>
        <Link href={link} passHref>
          <Styled.Container href={link} target={target}>
            {!!srcImg && <img src={srcImg} alt={text} />}
            {!srcImg && <span>{text}</span>}
          </Styled.Container>
        </Link>
      </Heading>
    );
  }
  return (
    <Heading size="big" uppercase darkMode={false}>
      <Styled.Container href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};
