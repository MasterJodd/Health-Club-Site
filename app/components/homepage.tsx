"use client";

import { useEffect } from "react";
import { motion, useScroll} from "framer-motion";
import Comets from "./comets";
import Stars from "./stars";
import Navbar from "./navbar";
import Image from "next/image";
import title from "@/images/title.png";
import logo from "@/images/logo.png";
import AboutUs from "./aboutUs";
import Benefits from "./benefits";
import ContactUs from "./contactUs";
import Footer from "./footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Comets />
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1 bg-[#00ffff] z-50"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top",
        }}
      />

      <section className="min-h-screen relative section-transition bg-[#000000] pb-0">
        <Stars />
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
          <a href="#benefits" className="mt-20 bg-[#00ffff] opacity-80 text-black font-bold px-6 py-3 rounded-3xl hover:scale-110 transition-colors">
            Explore More
          </a>
          </div>
        </div>
      </section>
      <Benefits />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
