import React from "react";
import SectionHeader from "./SectionHeader";
import PricingCard from "./PricingCard";
import { TfiHummer } from "react-icons/tfi";
import { FaRocket } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Pricing = () => {
      const { t } = useTranslation();
  
  const data = {
    title: t("pricing.pr"),
    desc: t("pricing.title"),
    subDesc: t("pricing.description"),
  };
  const pricingCardsData = [
    {
      title: t("pricing.starter_plan"),
      description: t("pricing.starter_plan_desc"),
      price: t("pricing.starter_plan_price"),
      features: [
        t("pricing.starter_plan_features.0"),
        t("pricing.starter_plan_features.1"),
        t("pricing.starter_plan_features.2"),
        t("pricing.starter_plan_features.3"),
      ],
      buttonText: t("pricing.starter_plan_btn"),
      icon: TfiHummer,
    },
    {
      title: t("pricing.pro_plan"),
      description: t("pricing.pro_plan_desc"),
      price: t("pricing.pro_plan_price"),
      features: [
        t("pricing.pro_plan_features.0"),
        t("pricing.pro_plan_features.1"),
        t("pricing.pro_plan_features.2"),
        t("pricing.pro_plan_features.3"),
      ],
      buttonText: t("pricing.pro_plan_btn"),
      icon: FaRocket,
    },
    {
      title: t("pricing.enterprise_plan"),
      description: t("pricing.enterprise_plan_desc"),
      price: t("pricing.enterprise_plan_price"),
      features: [
        t("pricing.enterprise_plan_features.0"),
        t("pricing.enterprise_plan_features.1"),
        t("pricing.enterprise_plan_features.2"),
        t("pricing.enterprise_plan_features.3"),
      ],
      buttonText: t("pricing.enterprise_plan_btn"),
      icon: MdBusinessCenter,
    },
  ];
  return (
    <div className="p-4">
      <SectionHeader
        title={data.title}
        desc={data.desc}
        subDesc={data.subDesc}
      />
      <div className="grid grid-cols-3 gap-x-4 mt-7">
        { pricingCardsData.map((item) => {
          return <PricingCard item={ item } icon={ item.icon} />
        })}
      </div>
    </div>
  );
};

export default Pricing;
