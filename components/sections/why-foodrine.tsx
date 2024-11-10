"use client";

import React from "react";
import Image from "next/image";

const WhyFoodrine: React.FC = () => {
  const benefits = [
    {
      title: "Ramah Lingkungan",
      description:
        "Dengan mengurangi limbah makanan, kita turut mengurangi emisi gas rumah kaca dan mendukung kelestarian lingkungan.",
      image: "/element6.png",
    },
    {
      title: "Bermanfaat bagi Sesama",
      description:
        "Membantu menyediakan akses pangan yang layak dan terjangkau bagi masyarakat rentan di berbagai wilayah Indonesia.",
      image: "/element7.png",
    },
    {
      title: "Ramah Lingkungan",
      description:
        "Dengan mengurangi limbah makanan, kita turut mengurangi emisi gas rumah kaca dan mendukung kelestarian lingkungan.",
      image: "/element8.png",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-16 text-white"
      style={{
        backgroundImage: "url('/background_main2.png')",
        backgroundSize: "100%",
      }}
    >
      <div className="relative container mx-auto px-4">
        <p className="text-lg font-light text-center">Unggulan</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center">
          Kenapa Menggunakan FoodrinE?
        </h2>

        <div className="flex flex-col gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 text-left ${
                index % 2 === 1 ? "md:text-right" : "md:text-left"
              }`}
            >
              <div
                className={`rounded-full flex items-center justify-center shadow-lg mx-auto ${
                  index % 2 === 1 ? "md:ml-auto md:mr-12" : "md:ml-12 md:mr-6"
                }`}
              >
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={100}
                  height={100}
                  className="w-24 h-24 md:w-26 md:h-26"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-300 text-base md:text-lg font-light font-poppins leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFoodrine;
