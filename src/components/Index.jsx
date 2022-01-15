import React from "react";
import Contact from "./contact/Contact";
import Intro from "./intro/Intro";
import Portfolio from "./portfolio/Portfolio";
import Testimonials from "./testimonials/Testimonials";
import Work from "./work/Work";

export default function Index() {
  return (
    <>
      <Intro />
      <Portfolio />
      <Work />
      <Testimonials />
      <Contact />
    </>
  );
}
