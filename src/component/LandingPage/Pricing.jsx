import React from "react";
import SectionHeader from "./SectionHeader";
import PricingCard from "./PricingCard";

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
      buttonText: "Get Started"
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
      buttonText: "Upgrade Now"
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
      buttonText: "Contact Us"
    }
  ];
  return (
    <div>
      <SectionHeader
        title={data.title}
        desc={data.desc}
        subDesc={data.subDesc}
      />
      <div className="grid grid-cols-3 gap-x-4 mt-7">
        { pricingCardsData.map((item) => {
          return <PricingCard item={ item} />
        })}
      </div>
    </div>
  );
};

export default Pricing;
