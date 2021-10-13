import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as MenuClose } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <MenuClose aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
