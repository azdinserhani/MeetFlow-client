import React from "react";
import SectionHeader from "./SectionHeader";
import PricingCard from "./PricingCard";
import { TfiHummer } from "react-icons/tfi";
import { FaRocket } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
const Pricing = () => {
  const data = {
    title: "Pricing",
    desc: "Flexible plans for every team",
    subDesc: `Choose the plan that best fits your team's needs. Whether you're just getting started or managing large projects, 
      You Manage offers affordable solutions to help you stay organized and productive`,
  };
  const pricingCardsData = [
    {
      title: "Starter Plan",
      description: "Perfect for individuals or small teams getting started with task management",
      price: "FREE",
      features: [
        "✓ Task Management Tools",
        "✓ Team Collaboration (up to 3 members)",
        "✓ Basic Project Tracking",
        "✓ Limited File Storage"
      ],
      buttonText: "Get Started",
      icon: TfiHummer
    },
    {
      title: "Pro Plan",
      description: "Designed for growing teams that need advanced features and flexibility",
      price: "$19",
      features: [
        "✓ Everything in Starter Plan",
        "✓ Unlimited Team Members",
        "✓ Advanced Project Tracking",
        "✓ Customizable Dashboards"
      ],
      buttonText: "Upgrade Now",
      icon: FaRocket
    },
    {
      title: "Enterprise Plan",
      description: "Best for large teams and enterprises with multiple projects and complex workflows",
      price: "$49",
      features: [
        "✓ Everything in Pro Plan",
        "✓ Dedicated Account Manager",
        "✓ Advanced Analytics & Reporting",
        "✓ Unlimited File Storage"
      ],
      buttonText: "Contact Us",
      icon:MdBusinessCenter

    }
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
