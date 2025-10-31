import React, { useState } from "react";
import RegisterModel from "../registermodel/registermodel.jsx"

const Card = (props) => {

  const [IsModalOpen, SetIsModalOpen] = useState(false)


  return (
    <div className="text-center h-full flex flex-col bg-white rounded-xl shadow-md p-6">
      <img
        src={props.Image}
        alt={props.Name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <div className="text-xl font-semibold text-gray-800 mb-2">{props.Name}</div>
      <div className="text-gray-500 mb-1">{props.Date}</div>
      <div className="text-gray-500 mb-3">{props.Venue}</div>
      <div className="text-gray-700 mb-4 flex-1">{props.Description}</div>

      <div className="mt-auto">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          href={props.RegisterLink}
          onClick={()=>{SetIsModalOpen(true)}}
        >
          Register
        </button>
      </div>
      <RegisterModel
      isOpen={IsModalOpen}
      onClose={()=>SetIsModalOpen(false)}
      eventName = {props.Name}/>
    </div>
  );
};

export default Card;
