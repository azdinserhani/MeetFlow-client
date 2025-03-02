import React from "react";
import SectionHeader from "./SectionHeader";
import FeaturesCard from "./Featurescard";
import { PiLampPendantFill } from "react-icons/pi";
import { FaTasks } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { MdChatBubble } from "react-icons/md";
import { useTranslation } from "react-i18next";
const Features = () => {
    const { t } = useTranslation();
  const headData = {
    title: t("features.fea"),
    desc: t("features.title"),
    subDesc: t("features.description"),
  };
  const featureData = [
    {
      title: t("features.smart_decisions"),
      desc: t("features.smart_decisions_desc"),
      color: "green",
      icon: PiLampPendantFill
    },
    {
      title: t("features.optimize_goals"),
      desc: t("features.optimize_goals_desc"),
      color: "red",
      icon: LuGoal
    },
    {
      title: t("features.task_management"),
      desc: t("features.task_management_desc"),
      color: "purple",
      icon: FaTasks
    },
    {
      title: t("features.team_chat"),
      desc: t("features.team_chat_desc"),
      color: "yellow",
      icon: MdChatBubble
    },
  ];
  return (
    <div className="">
      <SectionHeader
        title={headData.title}
        desc={headData.desc}
        subDesc={headData.subDesc}
      />
      <div className="flex flex-col md:flex-row space-y-4 space-x-5 p-7">
        {featureData.map((item) => {
          return <FeaturesCard item={item} icon={item.icon}/>;
        })}
      </div>
    </div>
  );
};

export default Features;
