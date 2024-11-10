import Image from "next/image";

const ProgramSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Title */}
        <p className="text-lg font-light text-green-900 mb-2">Tentang Kami</p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
          Program
        </h2>

        {/* Program Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Program 1 */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/program1.png"
                alt="Program Pengelolaan Limbah Makanan"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="text-orange-500 font-semibold mb-2">
                Program Pertama
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Program Pengelolaan Limbah Makanan
              </h3>
              <p className="text-gray-700 font-light">
                FoodrinE bekerja sama dengan berbagai mitra seperti restoran,
                supermarket, dan pasar tradisional untuk mengumpulkan dan
                mengolah limbah makanan menjadi produk pangan yang bernutrisi
                dan layak konsumsi.
              </p>
            </div>
          </div>

          {/* Program 2 */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/program2.png"
                alt="Distribusi Pangan untuk Komunitas Rentan"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="text-orange-500 font-semibold mb-2">
                Program Kedua
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Distribusi Pangan untuk Komunitas Rentan
              </h3>
              <p className="text-gray-700 font-light">
                Makanan hasil olahan dari limbah pangan yang masih layak
                dikonsumsi didistribusikan kepada masyarakat yang membutuhkan
                dengan harga terjangkau atau melalui donasi.
              </p>
            </div>
          </div>

          {/* Program 3 */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/program3.png"
                alt="Partisipasi Komunitas dan Donasi Rumah Tangga"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="text-orange-500 font-semibold mb-2">
                Program Ketiga
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Partisipasi Komunitas dan Donasi Rumah Tangga
              </h3>
              <p className="text-gray-700 font-light">
                Kami membuka kesempatan bagi pengguna untuk mendonasikan sisa
                makanan rumah tangga mereka, dan bagi komunitas lokal untuk
                bergabung dalam upaya pengelolaan limbah makanan di wilayah
                masing-masing.
              </p>
            </div>
          </div>

          {/* Program 4 */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src="/program4.png"
                alt="Kemitraan dan Kolaborasi Regional"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <p className="text-orange-500 font-semibold mb-2">
                Program Keempat
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Kemitraan dan Kolaborasi Regional
              </h3>
              <p className="text-gray-700 font-light">
                FoodrinE bekerja sama dengan berbagai organisasi di tiap
                regional untuk memperluas jangkauan program pengelolaan limbah
                makanan serta pendistribusian pangan yang tepat sasaran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
