import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(180deg, #81A263 0%, #365E32 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white font-semibold">
              Apa itu FoodrinE?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              FoodrinE adalah platform yang menghubungkan organisasi
              penanggulangan limbah makanan di berbagai wilayah di Indonesia,
              menyediakan produk olahan dari surplus makanan yang masih layak
              konsumsi, dan mendistribusikannya kepada masyarakat dengan harga
              terjangkau atau melalui donasi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white font-semibold">
              Bagaimana cara saya mendonasikan makanan melalui FoodrinE?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Anda bisa mendonasikan sisa makanan rumah tangga melalui aplikasi
              FoodrinE. Pilih opsi &quot;Donasi&quot; dan ikuti petunjuk yang tersedia
              untuk menyumbangkan makanan Anda ke organisasi di wilayah terdekat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white font-semibold">
              Apa saja manfaat bergabung sebagai komunitas atau organisasi di
              FoodrinE?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Sebagai bagian dari jaringan FoodrinE, komunitas atau organisasi
              Anda dapat berperan dalam mengurangi limbah makanan di wilayah
              masing-masing, mendistribusikan akses pangan bagi masyarakat yang
              membutuhkan, dan mendapatkan dukungan dari mitra serta organisasi
              lain yang memiliki tujuan sejenis.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white font-semibold">
              Bagaimana FoodrinE memastikan makanan yang didistribusikan layak
              konsumsi?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              FoodrinE bekerja sama dengan organisasi mitra untuk memastikan
              standar kualitas dalam pengelolaan dan pengemasan makanan,
              memastikan setiap produk yang didistribusikan aman dan layak
              dikonsumsi.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-white font-semibold">
              Apakah saya bisa membeli produk makanan hasil olahan limbah di
              FoodrinE?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Ya, Anda dapat membeli produk hasil olahan dari surplus makanan
              yang tersedia di aplikasi FoodrinE. Produk ini dijual dengan harga
              terjangkau sebagai bagian dari upaya kami mengurangi limbah
              makanan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-white font-semibold">
              Bagaimana cara mendaftar sebagai komunitas atau organisasi di
              FoodrinE?
            </AccordionTrigger>
            <AccordionContent className="text-white">
              Anda dapat mendaftar melalui halaman &quot;Daftar Komunitas&quot; di aplikasi
              FoodrinE. Isi formulir yang tersedia, dan tim kami akan menghubungi
              Anda untuk proses verifikasi dan detail lebih lanjut.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
