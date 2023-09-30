import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrSort } from "react-icons/gr";
import { BiHelpCircle } from "react-icons/bi";
import { RiNotification4Fill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", ];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  const dayOfMonth = currentDateTime.getDate();
  const month = currentDateTime.toLocaleString("default", { month: "long" });

  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();

  const showTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`; 

//doughnut chart code start  here
  const data = {
    labels: ["Remaining", "Completed"],
    datasets: [
      { 
        labels: "poll",
        data: [4, 10],
        backgroundColor: ["#E8D0FC", "#740AC7"],
        borderColor: ["#E8D0FC", "#740AC7"],
      },
    ],
  };

  const options = { responsive: true, maintainAspectRatio: false,  cutout: 120, 
 };



  






  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginsOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 20px  sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.fillText(`${data.datasets[0].data[0]}/${data.datasets[0].data[1]}`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y );
    },
  };
//doughnut chart code ends here

  return (
    <div className="px-5 ">
      <div className="flex justify-between items-center py-5">
        <div className="flex justify-between  items-center  w-1/3 text-lg p-2 border  border-black rounded-xl ">
          <AiOutlineSearch />
          <input
            type="text"
            name=""
            placeholder="Search Patients"
            className="focus:outline-none w-full"
          />
          <GrSort />
        </div>

        <div className="flex gap-3 text-xl">
          <BiHelpCircle />
          <RiNotification4Fill />
          <img src="" alt="profile" />
          <p>EN</p>
        </div>
      </div>

      <div className="border"></div>

      <div className="flex justify-between py-5 items-center text-gray-600">
        <span>Dashboard Home</span>

        <button className="bg-teal-500 border p-2 gap-2 flex items-center  text-white  rounded-xl">
          <MdPeopleAlt /> Schedule Appointment
        </button>
      </div>

      <div className="border"></div>

      <div className=" py-5">
        <div className="flex justify-between text-4xl">
          <h1>Welcome, Dr. Ajit Bhalla</h1>
          <h1>{showTime} </h1>
        </div>

        <div className="flex justify-between py-2">
          <p className="text-gray-500">Your Smart Clinic is ready to use </p>
          <p>
            {dayOfWeek}, {dayOfMonth} {month}
          </p>
        </div>
      </div>

      <div>
        <h1 className="p-3">Appointment status</h1>

        <div className="w-80 h-80  ">
          <Doughnut data={data} options={options} plugins={[textCenter]} />
        </div>
      </div>

      <div className="border"></div>
    </div>
  );
};

export default Dashboard;
