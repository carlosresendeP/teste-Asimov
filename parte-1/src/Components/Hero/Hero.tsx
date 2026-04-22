import illustration from "../../assets/icons/Illustration-hero.svg";
import amazonLogo from "../../assets/Company-Logos/Amazon-logo.svg";
import dribbbleLogo from "../../assets/Company-Logos/Dribble-logo.svg";
import hubspotLogo from "../../assets/Company-Logos/HubSpot-logo.svg";
import notionLogo from "../../assets/Company-Logos/Notion-logo.svg";
import netflixLogo from "../../assets/Company-Logos/Netflix-logo.svg";
import zoomLogo from "../../assets/Company-Logos/Zoom-Logo.svg";
import {
  HeroSection,
  HeroGrid,
  HeroContent,
  HeroTitle,
  HeroDescription,
  BookButton,
  IllustrationCol,
  LogosStrip,
  LogoItem,
  Header,
} from "./Hero.Styled.ts";
import { NavBar } from "../Navbar/NavBar.tsx";

export const Hero = () => {
  return (
    <Header>
      <HeroSection className="container">
        <NavBar />
        <HeroGrid>
          <HeroContent>
            <HeroTitle>Navigating the digital landscape for success</HeroTitle>
            <HeroDescription>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social media
              marketing, and content creation.
            </HeroDescription>
            <BookButton>Book a consultation</BookButton>
          </HeroContent>
          <IllustrationCol>
            <img src={illustration} alt="Digital marketing illustration" />
          </IllustrationCol>
        </HeroGrid>
        <LogosStrip>
          <LogoItem src={amazonLogo} alt="Amazon" />
          <LogoItem src={dribbbleLogo} alt="Dribbble" />
          <LogoItem src={hubspotLogo} alt="HubSpot" />
          <LogoItem src={notionLogo} alt="Notion" />
          <LogoItem src={netflixLogo} alt="Netflix" />
          <LogoItem src={zoomLogo} alt="Zoom" />
        </LogosStrip>
      </HeroSection>
    </Header>
  );
};
