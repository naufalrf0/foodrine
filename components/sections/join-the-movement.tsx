"use client";

import React from "react";

const JoinTheMovement: React.FC = () => {
  return (
    <section className="py-16 text-center bg-white">
      <div className="container mx-auto px-4">
        <p className="text-lg font-light text-green-900">Maka dari itu...</p>
        <h2 className="text-3xl md:text-5xl font-black text-green-900 mt-6 mb-8 md:mb-12">
          Mari Bergabung dalam Gerakan FoodrinE!
        </h2>

        <p className="text-lg md:text-xl text-green-900 font-light max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12">
          Setiap tindakan kecil dapat membuat perbedaan besar. Bersama-sama, kita
          bisa menciptakan masa depan yang lebih hijau dan sejahtera. Bergabunglah
          dengan kami di FoodrinE dan jadilah bagian dari solusi untuk Indonesia
          tanpa limbah makanan.
        </p>

        <p className="text-md font-semibold text-green-900 mb-4">
          Gabung sebagai:
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
          <a
            href="#"
            className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
          >
            Organisasi
          </a>
          <a
            href="#"
            className="bg-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors"
          >
            Mitra
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovement;
