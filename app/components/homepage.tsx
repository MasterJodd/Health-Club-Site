"use client";

import { useEffect } from "react";
import { motion, useScroll} from "framer-motion";
import Comets from "./comets";
import Stars from "./stars";
import Navbar from "./navbar";
import Image from "next/image";
import title from "@/images/title.png";
import logo from "@/images/logo.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSmile } from "react-icons/fa";

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Stars />
      <Comets />
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-[#22E4AC] z-50"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top",
        }}
      />

      <section className="min-h-screen relative section-transition bg-[#000000] pb-0">
        {/* <Stars /> */}

        <div className=" pt-[54px] text-center">
          <Image
            src={logo}
            alt="logo"
            height={400}
            width={400}
            className="mx-auto"
          />
        </div>
        <div className=" -mt-10 text-center">
          <Image
            src={title}
            alt="logo"
            height={400}
            width={400}
            className="mx-auto"
          />
          <p className=" mt-10 mb-10 text-white/80 font-semibold text-xl mx-auto">
            Inspiring Health, Building a Stronger, Healthier Community.
          </p>
          <div className="hover:scale-110">
          <a href="#benefits" className="mt-20 bg-[#22E4AC] opacity-80 text-black font-bold px-6 py-3 rounded-3xl hover:scale-110 transition-colors">
            Explore More
          </a>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="px-8 md:px-16 2xl:px-32 py-16"
      >
        <Stars />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 opacity-80 text-[#22E4AC] uppercase">
          benefits of our club
        </h1>
        <VerticalTimeline lineColor="#22E4AC">
          {/* Technology 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to right, #dff2eb, #b9e5e8)",
              color: "#22E4AC",
            }}
            contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
            iconStyle={{ background: "#22E4AC", color: "#fff" }}
            icon={<FaSmile />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
            Motivation and Accountability
            </h3>
            <p className="text-gray-600">
            Surround yourself with like-minded individuals, fostering motivation and consistency.
            </p>
          </VerticalTimelineElement>

          {/* Technology 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to left, #dff2eb, #b9e5e8)",
              color: "#22E4AC",
            }}
            contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
            iconStyle={{ background: "#22E4AC", color: "#fff" }}
            icon={<FaSmile />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
            Structured Fitness Programs
            </h3>
            <p className="text-gray-600">
            Participate in well-designed programs like yoga, Zumba, pilates, and aerobics.
            </p>
          </VerticalTimelineElement>

          {/* Technology 3 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to right, #dff2eb, #b9e5e8)",
              color: "#22E4AC",
            }}
            contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
            iconStyle={{ background: "#22E4AC", color: "#fff" }}
            icon={<FaSmile />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
            Improved Physical Health
            </h3>
            <p className="text-gray-600">
            Enhance cardiovascular fitness, strength, flexibility, and overall stamina.
            </p>
          </VerticalTimelineElement>

          {/* Features */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to left, #dff2eb, #b9e5e8)",
              color: "#22E4AC",
            }}
            contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
            iconStyle={{ background: "#22E4AC", color: "#fff" }}
            icon={<FaSmile />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
            Stress Reduction
            </h3>
            <p className="text-gray-600">
            Engage in physical activities that help reduce stress and boost mental health.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "linear-gradient(to right, #dff2eb, #b9e5e8)",
              color: "#22E4AC",
            }}
            contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
            iconStyle={{ background: "#22E4AC", color: "#fff" }}
            icon={<FaSmile />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
            Social Interaction
            </h3>
            <p className="text-gray-600">
            Build a community and make new friends while working on shared fitness goals.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
}
