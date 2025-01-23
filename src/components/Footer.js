import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#fedadb]">
        <div className="w-[80%] mx-auto py-4">
          <div className="py-2 flex md:flex-row flex-col gap-4 justify-around">
            <div className="md:w-1/4 w-full text-[#a41d23] flex flex-row items-start gap-2">
              <div>
                <img src={logo} alt="logo" className="w-16 h-16" />
              </div>
              <div className="flex flex-col justify-center font-bold">
                <div className="text-xl">HAZIRA</div>
                <div className="text-sm">PLANT</div>
              </div>
            </div>

            <div className="md:w-3/4 w-full flex sm:flex-row flex-col justify-around gap-4">
              <div className="flex flex-col gap-2">
                <div className="font-bold">Quick Links</div>
                <div className="flex flex-col text-xs">
                  <span>BA Set Donning Procedure</span>
                  <span>File Sharing System </span>
                  <span>Rajbhasa</span>
                  <span>Anmol Dharohar Drawings</span>
                  <span>Event Photos</span>
                  <span>ASTO CWC</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-bold">Contact Us</div>
                <div className="flex flex-col text-xs">
                  <span>Address</span>
                  <span>Phone Number</span>
                  <span>Email Address</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="font-bold">Visitor Count</div>
                <div className="flex flex-col text-xs">
                  <span>Total Visitor 142</span>
                  <span>All Time Visitor 25,485</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="h-0.5 my-2 bg-[#a5b396]"></hr>

          <div className="text-xs">
            Design & Development APPENTUS TECHNOLOGY PVT LTD
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
