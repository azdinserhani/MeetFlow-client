import React from "react";
import Button from "./Button";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="flex-col content-center justify-items-center min-h-[60vh] max-w-7xl space-y-4 ">
      <h1 className="text-4xl font-semibold">{t("hero_title")}</h1>
      <p className="text-lg text-gray-400">{t("hero_description")}</p>

      <Button label={t("request_demo")} />
    </div>
  );
};

export default Hero;
