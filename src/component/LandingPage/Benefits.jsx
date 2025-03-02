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
      title: t("benefits.seamless_collaboration"),
      desc: t("benefits.seamless_collaboration_desc"),
      icon: IoShareSocial,
      color: "text-purple-custom",
    },
    {
      id: 2,
      title: t("benefits.all_in_one_solution"),
      desc: t("benefits.all_in_one_solution_desc"),
      icon: BiSolidCategory,
      color: "text-pink-400",
    },
    {
      id: 3,
      title: t("benefits.all_in_one_solution"),
      desc: t("benefits.all_in_one_solution_desc"),
      icon: IoSettingsSharp,
      color: "text-yellow-400",
    },
  ];
  const headData = {
    title: t("benefits.ben"),
    desc: t("benefits.title"),
    subDesc: t("benefits.description"),
  };
  return (
    <div className="w-full">
      <SectionHeader
        title={headData.title}
        desc={headData.desc}
        subDesc={headData.subDesc}
      />
      <div className="flex  flex-col md:flex-row gap-4 my-6 mx-3">
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
