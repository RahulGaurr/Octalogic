import React from "react"; // Import React if not already imported
import profile from "../assets/profile.png";

const Card = ({ num, desc }) => {
  return (
    <div className="flex border rounded-lg shadow-lg w-60 gap-3 bg-white p-2 pt-4 h-32">
      <img
        className="h-9 rounded-full p-2 bg-green-200 mt-4"
        src={profile}
        alt="Profile"
      />
      <div>
        <h1 className="text-xl font-semibold">{num}</h1>
        <p className="text-sm text-gray-400">{desc}</p>
        <div className="text-right text-[#901E75]">view</div>
      </div>
    </div>
  );
};

export default Card;