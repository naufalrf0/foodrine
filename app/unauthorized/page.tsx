export default function UnauthorizedPage() {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Akses Ditolak</h1>
        <p className="text-lg">Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
          Kembali ke Beranda
        </a>
      </div>
    );
  }