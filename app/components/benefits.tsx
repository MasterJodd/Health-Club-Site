
import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import { FaSmile } from "react-icons/fa";
import Stars from './stars';

const Benefits = () => {
  return (
    <section
            id="benefits"
            className=" relative min-h-screen px-8 md:px-16 2xl:px-32 py-16"
          >
            <Stars />
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-[#00ffff] uppercase">
              benefits of our club
            </h1>
            <VerticalTimeline lineColor="#00ffff">
              {/* Technology 1 */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(225,225,225,0.1)",
                  color: "#00ffff",
                }}
                contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
                iconStyle={{ background: "#00ffff", color: "#fff" }}
                icon={<FaSmile />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                Motivation and Accountability
                </h3>
                <p className="text-white font-semibold">
                Surround yourself with like-minded individuals, fostering motivation and consistency.
                </p>
              </VerticalTimelineElement>
    
              {/* Technology 2 */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(225,225,225,0.1)",
                  color: "#00ffff",
                }}
                contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
                iconStyle={{ background: "#00ffff", color: "#fff" }}
                icon={<FaSmile />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                Structured Fitness Programs
                </h3>
                <p className="text-white font-semibold">
                Participate in well-designed programs like yoga, Zumba, pilates, and aerobics.
                </p>
              </VerticalTimelineElement>
    
              {/* Technology 3 */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(225,225,225,0.1)",
                  color: "#00ffff",
                }}
                contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
                iconStyle={{ background: "#00ffff", color: "#fff" }}
                icon={<FaSmile />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                Improved Physical Health
                </h3>
                <p className="text-white font-semibold">
                Enhance cardiovascular fitness, strength, flexibility, and overall stamina.
                </p>
              </VerticalTimelineElement>
    
              {/* Features */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(225,225,225,0.1)",
                  color: "#00ffff",
                }}
                contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
                iconStyle={{ background: "#00ffff", color: "#fff" }}
                icon={<FaSmile />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                Stress Reduction
                </h3>
                <p className="text-white font-semibold">
                Engage in physical activities that help reduce stress and boost mental health.
                </p>
              </VerticalTimelineElement>
    
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(225,225,225,0.1)",
                  color: "#00ffff",
                }}
                contentArrowStyle={{ borderRight: "15px solid  #e3f2fd" }}
                iconStyle={{ background: "#00ffff", color: "#fff" }}
                icon={<FaSmile />}
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold">
                Social Interaction
                </h3>
                <p className="text-white font-semibold">
                Build a community and make new friends while working on shared fitness goals.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>
  )
};

export default Benefits