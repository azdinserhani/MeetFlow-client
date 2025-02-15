import React from "react";
import BenefitsCard from "./BenefitsCard";
import { IoShareSocial } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import SectionHeader from "./SectionHeader";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: t("collaboration_title"),
      desc: t("collaboration_description"),
      icon: IoShareSocial,
      color: "text-purple-custom",
    },
    {
      id: 2,
      title: t("solution_title"),
      desc: t("solution_desc"),
      icon: BiSolidCategory,
      color: "text-pink-400",
    },
    {
      id: 3,
      title: t("customizable_title"),
      desc: t("customizable_desc"),
      icon: IoSettingsSharp,
      color: "text-yellow-400",
    },
  ];
  const headData = {
    title: t("benefits"),
    desc: t("benefits_title"),
    subDesc: t("benefits_description"),
  };
  return (
    <div className="w-full">
      <SectionHeader
        title={headData.title}
        desc={headData.desc}
        subDesc={headData.subDesc}
      />
      <div className="flex gap-4 my-6 mx-3">
        {data.map((item) => (
          <BenefitsCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
