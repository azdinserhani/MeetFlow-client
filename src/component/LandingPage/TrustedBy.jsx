import React from "react";
import { useTranslation } from "react-i18next";

const TrustedBy = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center my-9 w-auto  justify-items-center flex-col h-auto">
      <span className="text-gray-600 ">{t("trusted_by.title")}</span>
      <div className="flex flex-col md:flex-row h-fit space-x-6 space-y-5 mt-7 p-12 md:p-0">
        <img src="/google.webp" className="h-28 w-auto" alt="" />
        <img src="/spootify.png" className="h-24 w-auto" alt="" />
        <img src="/webflow.webp" className="h-28 w-auto" alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
