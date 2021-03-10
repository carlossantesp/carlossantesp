import React from "react";
import { Meta, Base } from "react-head";

const Head = () => {
  return (
    <>
      <Base href="https://carlos.santillan.dev" />
      <Meta property="og:title" content="Frontend Developer Carlos Santillan" />
      <Meta
        property="og:description"
        content="I am a web developer with more than 2 years of experience in frontend, I am passionate about designing and implementing responsive websites for each device, following the mobile-first methodology."
      />
      <Meta
        property="og:image"
        content="https://carlos.santillan.dev/images/page.png"
      />
      <Meta property="og:url" content="https://carlos.santillan.dev" />
      <Meta property="og:type" content="website" />
      <Meta
        property="og:site_name"
        content="Frontend Developer Carlos Santillan"
      />
    </>
  );
};

export default Head;
