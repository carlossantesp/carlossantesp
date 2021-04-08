import React from "react";
import { SMobile, SDesign, SDevelopment, SPrototype } from "../icons/services";
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
import Title from "../elements/Title";
import { useTranslation } from "react-i18next";

const ServiceSection = () => {
  const { t } = useTranslation("global");
  const servicesData = [
    {
      id: 1,
      title: t("service-section.responsive"),
      description: t("service-section.responsive-info"),
      icon: <SMobile />,
    },
    {
      id: 2,
      title: t("service-section.prototype"),
      description: t("service-section.prototype-info"),
      icon: <SPrototype />,
    },
    {
      id: 3,
      title: t("service-section.creative"),
      description: t("service-section.creative-info"),
      icon: <SDesign />,
    },

    {
      id: 4,
      title: t("service-section.development"),
      description: t("service-section.development-info"),
      icon: <SDevelopment />,
    },
  ];

  return (
    <ServiceContainer id="services">
      <Title section="03">{t("service-section.title")}</Title>
      <ServiceContent>
        <ServiceDescription>
          {t("service-section.description")}
        </ServiceDescription>
        <ServiceWrapper>
          {servicesData.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceInfo>{service.description}</ServiceInfo>
            </ServiceCard>
          ))}
        </ServiceWrapper>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default ServiceSection;
