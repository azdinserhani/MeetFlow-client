import React from "react";
import AdvantageCard from "./AdvantageCard";
import SectionHeader from "./SectionHeader";
import { useTranslation } from "react-i18next";

const Advantage = () => {
  const { t } = useTranslation();

  const advantageData = [
    {
      id: 1,
      title: t("advantages.todo_list"),
      desc: t("advantages.todo_list_desc"),
      number: "01",
      color: "yellow",
    },
    {
      id: 2,
      title: t("advantages.team_tracking"),
      desc: t("advantages.team_tracking_desc"),
      number: "02",
      color: "purple",
    },
    {
      id: 3,
      title: t("advantages.project_tracking"),
      desc: t("advantages.project_tracking_desc"),
      number: "03",
      color: "red",
    },
  ];
  const headData = {
    title: t("advantages.ad"),
    desc: t("advantages.title"),
    subDesc: t("advantages.description"),
  };
  return (
    <div className="flex flex-col space-y-7">
      <SectionHeader
        title={headData.title}
        desc={headData.desc}
        subDesc={headData.subDesc}
      />
      <div className="flex  space-x-4 ">
        {advantageData.map((item) => {
          return <AdvantageCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Advantage;
