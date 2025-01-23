import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpeg";
import event5 from "../assets/event5.jpeg";
import event6 from "../assets/event6.webp";
import Section2 from "./Section2";

const Home = () => {
  const settings = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 30,
    loop: true,
    speed: 500,
    slidesPerView: 1,
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <div className="bg-[#fedadb]">
        <div className="w-[80%] mx-auto flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full md:pr-4 pr-0 py-4">
            <div className="flex flex-row font-ubuntu justify-between pb-2">
              <div className="text-xl font-bold">News Flash</div>
              <div className="flex flex-row items-center font-semibold">
                <span className="text-sm">See All News Flash</span>
                <IoMdArrowForward className="text-lg mt-0.5" />
              </div>
            </div>

            <div className="w-[85%] py-2 font-medium font-ubuntu">
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet
                  eu.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet
                  eu.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet
                  eu.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet
                  eu.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Ridiculus duis id amet
                  eu.
                </li>
              </ul>
            </div>
          </div>

          {/* Vertical Line */}
          <div className="inline-block h-inherit w-0.5 self-stretch bg-[#a5b396]"></div>

          <div className="md:w-1/2 w-full md:pl-4 pl-0 py-4">
            <div className="flex flex-row font-ubuntu justify-between pb-2">
              <div className="text-xl font-bold">Events</div>
              <div className="flex flex-row items-center font-semibold">
                <span className="text-sm">See All Events</span>
                <IoMdArrowRoundForward className="text-lg mt-0.5" />
              </div>
            </div>

            <div>
              <div className="relative py-4">
                <Swiper {...settings}>
                  <SwiperSlide>
                    <div className="flex flex-row justify-around gap-2">
                      <div className="flex flex-col gap-2">
                        <img
                          src={event1}
                          alt="event1"
                          className="lg:h-32 lg:w-32 h-24 w-24 rounded-lg"
                        />
                        <span className="text-xs font-bold">Event 1 Name</span>
                        <span className="flex flex-row">
                          <span className="text-xs font-bold">15.08.2024</span>
                          <IoMdArrowForward className="text-sm mt-0.5" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <img
                          src={event2}
                          alt="event1"
                          className="lg:h-32 lg:w-32 h-24 w-24 rounded-lg"
                        />
                        <span className="text-xs font-bold">Event 2 Name</span>
                        <span className="flex flex-row">
                          <span className="text-xs font-bold">15.08.2024</span>
                          <IoMdArrowForward className="text-sm mt-0.5" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <img
                          src={event3}
                          alt="event1"
                          className="lg:h-32 lg:w-32 h-24 w-24 rounded-lg"
                        />
                        <span className="text-xs font-bold">Event 3 Name</span>
                        <span className="flex flex-row">
                          <span className="text-xs font-bold">15.08.2024</span>
                          <IoMdArrowForward className="text-sm mt-0.5" />
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-row justify-around gap-2">
                      <div className="flex flex-col gap-2">
                        <img
                          src={event4}
                          alt="event1"
                          className="lg:h-32 lg:w-32 h-24 w-24 rounded-lg"
                        />
                        <span className="text-xs font-bold">Event 4 Name</span>
                        <span className="flex flex-row">
                          <span className="text-xs font-bold">15.08.2024</span>
                          <IoMdArrowForward className="text-sm mt-0.5" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <img
                          src={event5}
                          alt="event1"
                          className="lg:h-32 lg:w-32 h-24 w-24 rounded-lg"
                        />
                        <span className="text-xs font-bold">Event 5 Name</span>
                        <span className="flex flex-row">
                          <span className="text-xs font-bold">15.08.2024</span>
                          <IoMdArrowForward className="text-sm mt-0.5" />
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <img
                          src={event6}
                          alt="event1"
                          className="lg:h-32 lg:w-32 h-24 w-24 rounded-lg"
                        />
                        <span className="text-xs font-bold">Event 6 Name</span>
                        <span className="flex flex-row">
                          <span className="text-xs font-bold">15.08.2024</span>
                          <IoMdArrowForward className="text-sm mt-0.5" />
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* Custom Navigation Buttons */}
                <button className="custom-prev absolute rounded-full text-xl mt-3 font-bold text-[#a41d23] px-2 z-10">
                  <IoMdArrowRoundBack />
                </button>
                <button className="custom-next absolute left-8 text-xl mt-3 rounded-full font-bold text-[#a41d23] px-2 z-10">
                  <IoMdArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
    </>
  );
};

export default Home;
