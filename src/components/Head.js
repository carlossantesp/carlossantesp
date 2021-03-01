import React from "react";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Carlos Santillan - Frontend Developer</title>
      <base href="https://carlos.santillan.dev"></base>
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta
        name="description"
        content="I am a web developer with more than 2 years of experience in frontend, I am passionate about designing and implementing responsive websites for each device, following the mobile-first methodology."
      />

      <meta
        property="og:title"
        content="Carlos Santillan - Frontend Developer"
      />
      <meta
        property="og:description"
        content="I am a web developer with more than 2 years of experience in frontend, I am passionate about designing and implementing responsive websites for each device, following the mobile-first methodology."
      />
      <meta
        property="og:image"
        content={`https://carlos.santillan.dev${
          require("../images/projects/portfolio-web.png").default
        }`}
      />
      <meta
        property="og:image:alt"
        content="Portafolio web - Carlos Santillan"
      />
      <meta property="og:url" content="https://carlos.santillan.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dev Carlos Santillan" />
    </Helmet>
  );
};

export default Head;
