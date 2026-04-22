import ctaIllustration from '../../assets/icons/Illustration-section-3.svg'
import {
  CTASection,
  CTACard,
  CTAContent,
  CTATitle,
  CTADescription,
  CTAButton,
  CTAIllustration,
} from './CTA.Styled'

export const CTA = () => {
  return (
    <CTASection>
      <div className="container">
        <CTACard>
          <CTAContent>
            <CTATitle>Let's make things happen</CTATitle>
            <CTADescription>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </CTADescription>
            <CTAButton>Get your free proposal</CTAButton>
          </CTAContent>
        </CTACard>
        <CTAIllustration src={ctaIllustration} alt="" />
      </div>
    </CTASection>
  )
}
