export default function Footer() {
  return (
    <footer className="mt-12 border-t" style={{ borderColor: '#E6F2E6' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#A7D7A9' }}>
              <span className="text-sm font-bold" style={{ color: '#0B2B34' }}>SS</span>
            </div>
            <span className="text-lg font-semibold" style={{ color: '#0B2B34' }}>SembakoSegar</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#0B2B34]/80 max-w-xs">
            Belanja kebutuhan harian dengan nyaman. Bahan segar, harga bersahabat, dan pengantaran cepat.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold" style={{ color: '#0B2B34' }}>Bantuan</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#0B2B34]/80">
            <li><a href="/bantuan.php" className="hover:underline">Pusat Bantuan</a></li>
            <li><a href="/ketentuan.php" className="hover:underline">Syarat & Ketentuan</a></li>
            <li><a href="/privasi.php" className="hover:underline">Kebijakan Privasi</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold" style={{ color: '#0B2B34' }}>Kategori Populer</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#0B2B34]/80">
            <li><a href="/kategori.php?cat=buah" className="hover:underline">Buah</a></li>
            <li><a href="/kategori.php?cat=sayur" className="hover:underline">Sayur</a></li>
            <li><a href="/kategori.php?cat=bahan-pokok" className="hover:underline">Bahan Pokok</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold" style={{ color: '#0B2B34' }}>Kontak</h3>
          <p className="mt-3 text-sm text-[#0B2B34]/80">support@sembakosegar.id</p>
          <p className="text-sm text-[#0B2B34]/80">Senin - Minggu 08.00 - 21.00</p>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: '#E6F2E6' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-[#0B2B34]/70">
          © {new Date().getFullYear()} SembakoSegar. Semua hak cipta.
        </div>
      </div>
    </footer>
  );
}
