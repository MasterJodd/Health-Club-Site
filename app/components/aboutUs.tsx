"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Stars from "./stars";

type members = {
  name: string;
  role: string;
  work: string;
};

const members = [
  {
    name: "Aryan",
    role: "President",
    work: "Aryan is the President of the club. He is responsible for the overall functioning of the club and ensures that the club runs smoothly.",
  },
  {
    name: "Abhinav",
    role: "Vice President",
    work: "Abhinav is the Vice President of the club. He assists the President in the overall functioning of the club.",
  },
  {
    name: "Angel",
    role: "Finance Manager",
    work: "Angel is the Finance Manager of the club. She is responsible for managing the finances of the club and ensures that the club is financially stable.",
  },
  {
    name: "Jitin",
    role: "Finance Manager",
    work: "Jitin is the Finance Manager of the club. He assists the Finance Manager in managing the finances of the club.",
  },
  {
    name: "Neha",
    role: "Organiser",
    work: "Neha is the Organiser of the club. She is responsible for organising events and activities for the club members.",
  },
  {
    name: "Nidhi",
    role: "Organiser",
    work: "Nidhi is the Organiser of the club. She assists the Organiser in organising events and activities for the club members.",
  },
  {
    name: "Priyanshu",
    role: "Social Media Manager",
    work: "Priyanshu is the Social Media Manager of the club. He is responsible for managing the club's social media accounts and ensures that the club is active on social media.",
  },
];

export default function AboutUs() {
  return (
    <div id="aboutUs" className="relative p-10">
      <Stars />
      <div className="text-center my-20">
        <h1 className="text-5xl font-extrabold uppercase text-[#00ffff] ">
          About Our Team
        </h1>
        <p className="text-lg my-9 font-bold text-white/80">
          Meet the team behind the Club
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 ml-20">
        {members.map((members, index) => (
          <div
          key={index} 
          className="w-96 my-6 bg-[rgba(225,225,225,0.1)] backdrop-blur-xl border border-slate-200 p-8 rounded-3xl">
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-extrabold text-xl text-[#00ffff] ">
                  {members.name}
                </span>
                <span className="text-gray-600 font-bold dark:text-slate-400 text-sm">
                  {members.role}
                </span>
              </span>
            </a>
            <p className="leading-relaxed mt-6 ml-3 mb-6 w-full text-balance line-clamp-4 dark:text-slate-200 text-slate-800">
              {members.work}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
