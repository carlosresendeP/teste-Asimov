import { Fragment } from 'react'
import arrowGreen from '../../assets/icons/Arrow-icon-green.svg'
import {
  CaseStudiesSection,
  SectionHeader,
  Badge,
  Description,
  CasesBlock,
  CaseItem,
  Divider,
  CaseText,
  LearnMoreLink,
  ArrowIcon,
} from './CaseStudies.Styled'

const cases = [
  'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
  'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
  'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
]

export const CaseStudies = () => {
  return (
    <CaseStudiesSection>
      <div className="container">
        <SectionHeader>
          <Badge>Case Studies</Badge>
          <Description>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </Description>
        </SectionHeader>
        <CasesBlock>
          {cases.map((text, index) => (
            <Fragment key={text}>
              {index > 0 && <Divider />}
              <CaseItem>
                <CaseText>{text}</CaseText>
                <LearnMoreLink href="#">
                  Learn more
                  <ArrowIcon src={arrowGreen} alt="" />
                </LearnMoreLink>
              </CaseItem>
            </Fragment>
          ))}
        </CasesBlock>
      </div>
    </CaseStudiesSection>
  )
}
