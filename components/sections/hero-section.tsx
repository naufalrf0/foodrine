"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const slides = [
    {
      image: "/element2.png",
      title: "Selamat Datang di FoodrinE!",
      text: "Platform inovatif yang membantu mengurangi limbah makanan di Indonesia sekaligus meningkatkan akses pangan bagi masyarakat yang membutuhkan.",
    },
    {
      image: "/element3.png",
      title: "Bersama Mengurangi Limbah Makanan",
      text: "Mari bergabung bersama kami dalam menjaga bumi dan meningkatkan kesejahteraan masyarakat.",
    },
    {
      image: "/element2.png",
      title: "Dukung Komunitas Anda",
      text: "Bagikan makanan berlebih untuk membantu mereka yang membutuhkan di sekitar Anda.",
    },
  ];

  return (
    <section className="relative min-h-screen w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative min-h-screen w-full flex flex-col items-center justify-center text-center text-white">
              {/* Background Image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-green-950 opacity-70 -z-10"></div>

              {/* Content */}
              <div className="relative z-10 mt-20 px-4">
                <h1 className="text-3xl md:text-6xl font-bold mb-4 animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-semibold mt-4 md:mt-9 mb-6 md:mb-8 max-w-3xl mx-auto animate-fadeInDelay">
                  {slide.text}
                </p>
                <Link
                  href="/tentang-kami"
                  className="text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-colors mt-6 inline-block"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
