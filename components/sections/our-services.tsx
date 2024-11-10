"use client";

import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Beli Olahan Makanan dari Surplus Pangan",
    description:
      "Temukan berbagai produk pangan hasil olahan dari makanan berlebih yang masih layak konsumsi. Dengan harga terjangkau, Anda dapat menikmati makanan berkualitas sambil mendukung pengurangan limbah makanan di Indonesia.",
    image: "/element3.png",
    alt: "Beli Makanan",
  },
  {
    title: "Donasikan Makanan-makanan Anda",
    description:
      "Punya sisa makanan yang layak konsumsi? Donasikan melalui FoodrinE dan bantu kami untuk mendistribusikannya kepada masyarakat yang membutuhkan di wilayah Anda.",
    image: "/element4.png",
    alt: "Donasikan Makanan",
  },
  {
    title: "Bergabung sebagai Komunitas",
    description:
      "Ajak komunitas Anda berpartisipasi dalam gerakan pengelolaan limbah makanan. Bersama-sama, kita bisa menciptakan dampak yang lebih besar dalam mengurangi limbah pangan dan mendukung ketahanan pangan lokal.",
    image: "/element5.png",
    alt: "Bergabung Komunitas",
  },
];

const OurServices: React.FC = () => {
  return (
    <section className="relative bg-white bg-cover bg-center min-h-screen w-full flex items-center justify-center py-16 text-center text-green1bg">
      <div className="container mx-auto px-4">
        <p className="text-lg font-light">Layanan Kami</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16">
          Apa yang Kami Tawarkan?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg mx-auto max-w-sm">
              <Image
                src={service.image}
                alt={service.alt}
                width={400}
                height={224}
                className="w-full h-56 object-cover rounded-2xl shadow-2xl mb-6"
              />
              <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-6 md:mt-12">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm md:text-base font-thin font-poppins text-justify leading-relaxed mt-4 md:mt-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
