import { Clock9, EllipsisVertical, Hourglass } from "lucide-react";
import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <div className="">
      <div
        key={project.id}
        className="border rounded-lg flex flex-col overflow-hidden border-gray-300 shadow-lg group"
      >
        <div className="relative">
          <Link to={`/dashBoard/project/${project.id}`}>
            <div className="absolute inset-0 bg-black opacity-50 text-white p-2 rounded-bl-md z-10 hidden group-hover:flex items-center justify-center duration-300">
              View Project
            </div>
          </Link>
          <img
            src={project.imageUrl}
            alt={project.title}
            className="object-cover w-full h-64"
          />
          <EllipsisVertical className="absolute right-2 top-2 cursor-pointer bg-white p-1 rounded-md hover:bg-black hover:text-white duration-300" />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <span className="flex items-center text-gray-500">
              <Hourglass size={15} className="mr-1" />
              {project.duration}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="flex items-center">
              <AiOutlineTeam size={20} className="mr-1" /> {project.members}{" "}
              Members
            </h3>
            <span className="flex items-center text-gray-500 bg-red-200 p-1 rounded-md">
              <Clock9 size={15} className="mr-1" />
              {project.daysLeft} Days Left
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
