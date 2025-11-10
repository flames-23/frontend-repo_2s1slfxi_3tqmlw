export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold tracking-tight text-[#0B2B34]">
              Belanja kebutuhan harian jadi lebih mudah.
            </h1>
            <p className="mt-4 text-[#0B2B34]/80 text-base sm:text-lg max-w-xl">
              Bahan segar, harga bersahabat, langsung sampai ke rumah.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/produk.php"
                className="inline-flex items-center justify-center rounded-full bg-[#A7D7A9] text-[#0B2B34] font-semibold px-6 py-3 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
              >
                Mulai Belanja
              </a>
              <a
                href="/promo.php"
                className="inline-flex items-center justify-center rounded-full border border-green-300 bg-white text-[#0B2B34] font-semibold px-6 py-3 shadow-sm hover:bg-[#A7D7A9]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
              >
                Lihat Promo Segar
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: "0 6px 18px rgba(10,20,30,0.06)" }}>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
              alt="Ilustrasi belanja bahan segar"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-[#A7D7A9]/20" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-b from-transparent to-[#A7D7A9]/10" aria-hidden />
    </section>
  );
}
