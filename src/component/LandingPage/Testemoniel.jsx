import React from "react";
import SectionHeader from "./SectionHeader";
import TestemonielCard from "./TestemonielCard";

const Testemoniel = () => {
  const testimonialsData = {
    title: "Testemoniel",
    description: "What our users say",
    subDesc:
      "See how YouManage has transformed the way teams work. Hear directly from users who've improved their productivity and project management.",
    };
    const testimonials = [
        {
            name: "Sarah Thompson",
            position: "Product Manager, Spotify",
            feedback: "YouManage has completely changed how our team collaborates. It's intuitive and has made tracking projects so much easier."
        },
        {
            name: "Alex Rivera",
            position: "Marketing Lead, DocuSign",
            feedback: "With YouManage, we've streamlined our workflow and met deadlines more consistently. The team chat feature is a game-changer."
        },
        {
            name: "David Lee",
            position: "Operations Director, Codecademy",
            feedback: "YouManage has helped us keep all our tasks in order. The interface is clean, and it makes managing multiple projects a breeze."
        }
    ];
  return (
    <div>
      <SectionHeader
        title={testimonialsData.title}
        desc={testimonialsData.description}
        subDesc={testimonialsData.subDesc}
      />
      <div className=" flex space-x-4 p-3">{
              testimonials.map((item) => {
            return <TestemonielCard item={item}/>
        })}</div>
      
    </div>
  );
};

export default Testemoniel;
