const VisionMissionSection = () => {
  return (
    <section className="pt-12 bg-white text-center">
      <div className="container mx-auto px-4">
        {/* Vision */}
        <div className="mb-32">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Visi</h3>
          <p className="text-lg md:text-xl font-light text-gray-700 max-w-5xl mx-auto">
            Menciptakan ekosistem pangan yang berkelanjutan di Indonesia dengan
            mengurangi limbah makanan dan meningkatkan akses pangan bagi
            masyarakat yang membutuhkan.
          </p>
        </div>
      </div>

      {/* Mission Background */}
      <div className="relative bg-cover bg-center w-full h-[250px]" style={{ backgroundImage: "url('/bg-mission.png')" }}>
        {/* Mission Content Box */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Misi</h3>
          <ul className="list-disc list-inside text-left text-gray-700 font-light space-y-3">
            <li>
              Mengurangi jumlah limbah makanan di Indonesia melalui pengelolaan dan distribusi pangan yang bijaksana.
            </li>
            <li>
              Menyediakan akses pangan terjangkau bagi masyarakat rentan melalui produk hasil olahan surplus makanan.
            </li>
            <li>
              Memberdayakan komunitas dan organisasi lokal untuk bergabung dalam jaringan penanggulangan limbah makanan di wilayah mereka.
            </li>
            <li>
              Membangun kemitraan yang kuat dengan pelaku industri pangan di berbagai wilayah untuk memperluas dampak positif pengelolaan limbah makanan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
