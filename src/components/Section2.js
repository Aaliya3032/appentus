import React from "react";
import manager from "../assets/manager.jpg";
import { IoMdArrowForward } from "react-icons/io";

const Section2 = () => {
  return (
    <div>
      <div className="w-[80%] mx-auto flex flex-col gap-4 py-4">
        <div className="text-4xl font-bold text-[#a41d23] py-4 font-ubuntu">
          Plant Manager
        </div>
        <div className="flex flex-row gap-8 py-4">
          <div className="w-1/4 items-center md:flex hidden">
            <img src={manager} alt="manager" className="lg:w-56 w-48 lg:h-56 h-48 rounded-xl"/>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <div className="text-xl font-bold font-ubuntu">Manager Name</div>
            <p className="text-xs leading-loose">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu
              cursus vitae nullam. Enim eget at faucibus faucibus. Arcu aliquam
              tristique sit interdum rhoncus cursus felis adipiscing. Pharetra
              feugiat tempor adipiscing justo ipsum erat tristique. Habitasse
              dui turpis pulvinar non ornare. Elementum ullamcorper auctor
              malesuada et elementum sit consectetur commodo id. Ultrices nullam
              luctus eleifend arcu duis sit a amet nibh. Dui enim ut habitasse
              cursus a. Non malesuada in dignissim dui enim arcu adipiscing.
              Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet eu
              cursus vitae nullam. Enim eget at faucibus faucibus.
            </p>
            <div className="flex flex-row items-center font-semibold">
                <span className="text-sm font-bold">Plant Manager Message Read Here</span>
                <IoMdArrowForward className="text-lg mt-0.5" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
