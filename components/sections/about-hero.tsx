const AboutHero = () => {
    return (
      <section
        className="relative bg-cover bg-center h-[670px] w-full flex items-center text-white px-4 md:px-8"
        style={{ backgroundImage: "url('/hero_about.png')" }}
      >
        <div className="container mx-auto flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
          <p className="text-lg font-light mb-2">Tentang Kami</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selamatkan Makanan, <br /> Selamatkan Bumi
          </h1>
          <p className="text-lg md:text-xl font-light mb-6">
            Mengurangi limbah dengan mengolah makanan dan mendistribusikannya ke kalangan masyarakat.
          </p>
          <button className="text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-colors mt-6 inline-block">
            Pelajari Lebih Lanjut
          </button>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 -z-10"></div>
      </section>
    );
  };
  
  export default AboutHero;
  