import React from "react";
import SectionHeader from "./SectionHeader";
import TestemonielCard from "./TestemonielCard";
import { useTranslation } from "react-i18next";

const Testemoniel = () => {
  const { t } = useTranslation();

  const testimonialsData = {
    title: t("testimonials.tes"),
    description: t("testimonials.title"),
    subDesc: t("testimonials.description"),
  };

  const testimonials = [
    {
      name: t("testimonials.reviews.0.name"),
      position: t("testimonials.reviews.0.position"),
      feedback: t("testimonials.reviews.0.review"),
    },
    {
      name: t("testimonials.reviews.1.name"),
      position: t("testimonials.reviews.1.position"),
      feedback: t("testimonials.reviews.1.review"),
    },
    {
      name: t("testimonials.reviews.2.name"),
      position: t("testimonials.reviews.2.position"),
      feedback: t("testimonials.reviews.2.review"),
    },
  ];
  return (
    <div>
      <SectionHeader
        title={testimonialsData.title}
        desc={testimonialsData.description}
        subDesc={testimonialsData.subDesc}
      />
      <div className=" flex md:flex-row flex-col space-y-4 space-x-4 p-3">
        {testimonials.map((item) => {
          return <TestemonielCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Testemoniel;
