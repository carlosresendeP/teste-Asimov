import illustration1 from '../../assets/icons/Illustration-services-1.png'
import illustration2 from '../../assets/icons/Illustration-services-2.svg'
import illustration3 from '../../assets/icons/Illustration-services-3.svg'
import illustration4 from '../../assets/icons/Illustration-services-4.svg'
import illustration5 from '../../assets/icons/Illustration-services-5.svg'
import illustration6 from '../../assets/icons/Illustration-services-6.svg'
import arrowDark from '../../assets/icons/Arrow-icon-1.svg'
import arrowLight from '../../assets/icons/Arrow-icon-2.svg'
import {
  ServicesSection,
  SectionHeader,
  ServicesBadge,
  ServicesDescription,
  ServicesGrid,
  ServiceCard,
  CardTitleWrapper,
  CardTitleBadge,
  CardIllustration,
  LearnMore,
  ArrowIcon,
} from './Services.Styled'

type ServiceVariant = 'light' | 'green' | 'dark'

interface Service {
  title: string
  illustration: string
  variant: ServiceVariant
}

const services: Service[] = [
  { title: 'Search engine optimization', illustration: illustration1, variant: 'light' },
  { title: 'Pay-per-click advertising', illustration: illustration2, variant: 'green' },
  { title: 'Social Media Marketing', illustration: illustration3, variant: 'dark' },
  { title: 'Email Marketing', illustration: illustration4, variant: 'light' },
  { title: 'Content Creation', illustration: illustration5, variant: 'green' },
  { title: 'Analytics and Tracking', illustration: illustration6, variant: 'dark' },
]



export const Services = () => {
  return (
    <ServicesSection>
      <div className="container">
        <SectionHeader>
          <ServicesBadge>Services</ServicesBadge>
          <ServicesDescription>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </ServicesDescription>
        </SectionHeader>
        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.title} $variant={service.variant}>
              <div className='left-side'>
                <CardTitleWrapper>
                  <CardTitleBadge $variant={service.variant}>
                    {service.title}
                  </CardTitleBadge>
                </CardTitleWrapper>
                
                <LearnMore $variant={service.variant}>
                  <ArrowIcon
                    src={service.variant === 'dark' ? arrowLight : arrowDark}
                    alt=""
                  />
                  Learn more
                </LearnMore>
              </div>
              <CardIllustration src={service.illustration} alt={service.title} />
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  )
}
