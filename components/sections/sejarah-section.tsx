"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SejarahSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <p className="text-lg font-light text-green-900 mb-2">Tentang Kami</p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Sejarah
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl font-light text-green-800 mx-auto mb-8">
          FoodrinE didirikan dengan tujuan untuk mengurangi limbah makanan di
          Indonesia yang semakin meningkat setiap tahunnya. FoodrinE hadir
          sebagai solusi yang menghubungkan surplus makanan dengan masyarakat
          yang membutuhkan.
        </p>

        <p className="text-lg md:text-xl font-light text-green-800 mx-auto mb-12">
          Berawal dari kesadaran akan besarnya jumlah makanan yang terbuang
          sia-sia di berbagai sektor seperti rumah tangga, restoran, dan
          supermarket, serta tingginya kebutuhan masyarakat akan akses pangan
          yang terjangkau.
        </p>

        {/* Image Slider */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-80">
              <Image
                src="/element510.png"
                alt="Volunteers working together"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-80">
              <Image
                src="/element420.png"
                alt="Food distribution"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-80">
              <Image
                src="/element310.png"
                alt="Community helping"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="relative w-full h-80">
              <Image
                src="/element21.png"
                alt="Community event"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <p className="text-lg mt-10 md:text-xl font-light text-green-800 mx-auto mb-12">
          Melalui kolaborasi dengan berbagai organisasi, komunitas, dan mitra
          bisnis, FoodrinE telah membangun ekosistem pengelolaan limbah makanan
          yang efektif dan berkelanjutan, menginspirasi perubahan positif di
          berbagai wilayah di Indonesia.
        </p>
      </div>
    </section>
  );
};

export default SejarahSection;
