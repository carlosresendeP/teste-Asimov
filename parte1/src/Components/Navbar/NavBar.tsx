import logoSvg from "../../assets/Logo.svg";
import {
  NavWrapper,
  NavInner,
  LogoWrapper,
  NavLinks,
  NavLink,
  QuoteButton,
} from "./NavBar.Styled.ts";

export const NavBar = () => {
  return (
    <NavWrapper >
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
        </NavLinks>
        <QuoteButton>Request a quote</QuoteButton>
      </NavInner>
    </NavWrapper>
  );
};
