import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoSvg from "../../assets/Logo.svg";
import {
  NavWrapper,
  NavInner,
  LogoWrapper,
  NavLinks,
  NavLink,
  QuoteButton,
  HamburgerButton,
  MobileMenu,
} from "./NavBar.Styled.ts";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavWrapper>
      <NavInner>
        <LogoWrapper>
          <img src={logoSvg} alt="Positivus" height={36} />
        </LogoWrapper>
        <NavLinks>
          <NavLink href="#">About us</NavLink>
          <NavLink href="#">Services</NavLink>
          <NavLink href="#">Use Cases</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <NavLink href="#">Blog</NavLink>
          <QuoteButton>Request a quote</QuoteButton>
        </NavLinks>

        <HamburgerButton onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </HamburgerButton>
      </NavInner>
      <MobileMenu $isOpen={isOpen}>
        <NavLink href="#">About us</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Use Cases</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">Blog</NavLink>
        <QuoteButton as="div">Request a quote</QuoteButton>
      </MobileMenu>
    </NavWrapper>
  );
};
