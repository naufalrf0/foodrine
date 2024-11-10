import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          
          {/* Contact Information Section */}
          <div className="md:w-1/3 ml-14">
            <Image
              src="/logo_horizontal.png"
              alt="FoodrinE Logo"
              width={250}
              height={60}
              className="mb-3"
            />
            <div className="text-sm">
              +62 821-1077-9827 <br />
              foodrine@gmail.com <br />
              info.foodrine@gmail.com
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-green-950 hover:bg-gray-200 transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-green-950 hover:bg-gray-200 transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-green-950 hover:bg-gray-200 transition">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Address Section */}
          <div className="md:w-1/3 mt-4">
            <h3 className="text-lg font-semibold mb-3">Our Address</h3>
            <div className="text-sm font-light mt-6">
              Sekolah Vokasi IPB University, <br />
              Jl. Kumbang No.14, RT.02/RW.06 <br />
              Kota Bogor, Jawa Barat <br />
              16128
            </div>
          </div>

          {/* Map Section */}
          <div className="md:w-1/3 mt-6 md:mt-0 h-48 mr-14">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4628677988117!2d106.8035398751545!3d-6.589245164413314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d2e602b501%3A0x25a12f0f97fac4ee!2sSchool%20of%20Vocational%20Studies%20-%20IPB%20University!5e0!3m2!1sen!2sca!4v1730869893633!5m2!1sen!2sca"
              width="100%"
              height="100%"
              className="border border-gray-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
