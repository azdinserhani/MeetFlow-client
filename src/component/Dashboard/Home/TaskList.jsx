import { Clock3 } from "lucide-react";
import React from "react";
import { AiTwotoneClockCircle } from "react-icons/ai";
const TaskList = () => {
  const tasks = [
    {
      title: "Product Review for UI8 Market",
      status: "In progress",
      timeSpent: "4h",
    },
    {
      title: "UX Research for Product",
      status: "On hold",
      timeSpent: "8h",
    },
    {
      title: "App design and development",
      status: "Done",
      timeSpent: "32h",
    },
  ];

  return (
    <div>
      <div className="flex px-5">
        <h3 className="flex-1 text-lg font-bold flex items-center">
          Current Tasks{" "}
          <span className="font-normal ml-9 text-gray-400 text-sm">
            {" "}
            Done 30%
          </span>
        </h3>
      </div>
      <div className="flex flex-col space-y-4 mt-4 ml-16">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between ">
            <h4 className="text-lg flex-1">{task.title}</h4>

            <div className="flex-1">
              <p
                className={`text-left ${
                  task.status === "In progress"
                    ? "text-yellow-500"
                    : task.status === "On hold"
                    ? "text-red-500"
                    : task.status === "Done"
                    ? "text-green-500"
                    : "text-gray-500"
                }`}
              >
                {task.status}
              </p>
            </div>
            <span className="flex justify-end items-center flex-row gap-1 flex-1 text-right">
              {task.timeSpent} <AiTwotoneClockCircle />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
