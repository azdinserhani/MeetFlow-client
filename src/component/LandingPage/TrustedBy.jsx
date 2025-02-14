import React from "react";
import { useTranslation } from "react-i18next";

const TrustedBy = () => {
    const { t } = useTranslation();

  return (
    <div className="text-center my-9 w-auto  justify-items-center flex-col h-auto">
      <span className="text-gray-600 ">{t("trusted_by")}</span>
      <div className="flex h-16 space-x-6 mt-7">
        <img src="/google.webp" alt="" />
        <img src="/spootify.png" alt="" />
        <img src="/webflow.webp" alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;
