import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      title: "Website design",
      duration: "4 Month",
      members: 5,
      daysLeft: 35,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACySFUciJOYZR0VrR9Ff1mNQQmAdkoOeWrg&s",
    },
    {
      id: 2,
      title: "Mobile App Development",
      duration: "6 Month",
      members: 8,
      daysLeft: 60,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACySFUciJOYZR0VrR9Ff1mNQQmAdkoOeWrg&s",
    },
    {
      id: 3,
      title: "Backend API",
      duration: "3 Month",
      members: 3,
      daysLeft: 20,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACySFUciJOYZR0VrR9Ff1mNQQmAdkoOeWrg&s",
    },
    {
      id: 4,
      title: "Database Optimization",
      duration: "2 Month",
      members: 4,
      daysLeft: 15,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACySFUciJOYZR0VrR9Ff1mNQQmAdkoOeWrg&s",
    },
    {
      id: 5,
      title: "UI/UX Research",
      duration: "5 Month",
      members: 6,
      daysLeft: 45,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRACySFUciJOYZR0VrR9Ff1mNQQmAdkoOeWrg&s",
    },
  ];
  return (
    <div className="p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-20">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
