import React from "react";
import { Title, TitleWrapper } from "../elements/Title";
import {
  ServiceContainer,
  ServiceContent,
  ServiceDescription,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceInfo,
} from "./ServiceSectionElements";

import { SMobile, SDesign, SDevelopment, SPrototype } from "../icons/services";

const ServiceSection = () => {
  return (
    <ServiceContainer>
      <TitleWrapper>
        <Title section="03">Services</Title>
      </TitleWrapper>
      <ServiceContent>
        <ServiceDescription>Services I offer to my clients</ServiceDescription>
        <ServiceWrapper>
          <ServiceCard>
            <ServiceIcon>
              <SMobile />
            </ServiceIcon>
            <ServiceTitle>Fully Responsive</ServiceTitle>
            <ServiceInfo>
              Your site will display properly on any device, including desktop
              computers, tablets and mobile phones.
            </ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <SPrototype />
            </ServiceIcon>
            <ServiceTitle>UI Prototypes</ServiceTitle>
            <ServiceInfo>
              A good prototyping of the web design allows to visualize the
              client how your website will look before implementing it.
            </ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <SDesign />
            </ServiceIcon>
            <ServiceTitle>Creative Design</ServiceTitle>
            <ServiceInfo>
              A good and attractive web design helps you keep your leads on your
              site, which is the digital face of your business.
            </ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <SDevelopment />
            </ServiceIcon>
            <ServiceTitle>Development</ServiceTitle>
            <ServiceInfo>
              I know the importance of web design and can help you create a
              website you’ll love.
            </ServiceInfo>
          </ServiceCard>
        </ServiceWrapper>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default ServiceSection;
