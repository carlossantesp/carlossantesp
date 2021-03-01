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
import { useTranslation } from "react-i18next";

import { SMobile, SDesign, SDevelopment, SPrototype } from "../icons/services";

const ServiceSection = () => {
  const { t } = useTranslation("global");
  return (
    <ServiceContainer id="services">
      <TitleWrapper>
        <Title section="03">{t("service-section.title")}</Title>
      </TitleWrapper>
      <ServiceContent>
        <ServiceDescription>
          {t("service-section.description")}
        </ServiceDescription>
        <ServiceWrapper>
          <ServiceCard>
            <ServiceIcon>
              <SMobile />
            </ServiceIcon>
            <ServiceTitle>{t("service-section.responsive")}</ServiceTitle>
            <ServiceInfo>{t("service-section.responsive-info")}</ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <SPrototype />
            </ServiceIcon>
            <ServiceTitle>{t("service-section.prototype")}</ServiceTitle>
            <ServiceInfo>{t("service-section.prototype-info")}</ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <SDesign />
            </ServiceIcon>
            <ServiceTitle>{t("service-section.creative")}</ServiceTitle>
            <ServiceInfo>{t("service-section.creative-info")}</ServiceInfo>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>
              <SDevelopment />
            </ServiceIcon>
            <ServiceTitle>{t("service-section.development")}</ServiceTitle>
            <ServiceInfo>{t("service-section.development-info")}</ServiceInfo>
          </ServiceCard>
        </ServiceWrapper>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default ServiceSection;
