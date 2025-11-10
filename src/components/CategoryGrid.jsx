const cards = [
  { label: 'Buah Segar', slug: 'buah', bg: '#EAF6D7', img: '/assets/kategori/kategori-buah.svg', alt: 'Buah Segar' },
  { label: 'Sayur', slug: 'sayur', bg: '#DDF6F0', img: '/assets/kategori/kategori-sayur.svg', alt: 'Sayur' },
  { label: 'Bahan Pokok', slug: 'bahan-pokok', bg: '#FFF2D9', img: '/assets/kategori/kategori-bahan-pokok.svg', alt: 'Bahan Pokok' },
  { label: 'Daging & Protein', slug: 'daging-protein', bg: '#F3E8FF', img: '/assets/kategori/kategori-daging.svg', alt: 'Daging & Protein' },
  { label: 'Minuman', slug: 'minuman', bg: '#E8F1FF', img: '/assets/kategori/kategori-susu.svg', alt: 'Minuman' },
  { label: 'Seafood', slug: 'seafood', bg: '#E6F7FB', img: '/assets/kategori/kategori-seafood.svg', alt: 'Seafood' },
  { label: 'Camilan', slug: 'camilan', bg: '#FFE8EC', img: '/assets/kategori/kategori-snack.svg', alt: 'Camilan' },
  { label: 'Bumbu Dapur', slug: 'bumbu', bg: '#F2F2E8', img: '/assets/kategori/kategori-bumbu.svg', alt: 'Bumbu Dapur' },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold" style={{ color: '#0B2B34' }}>Semua Kategori</h2>
        <a href="/kategori.php?cat=" className="text-sm font-medium underline" style={{ color: '#0B2B34' }}>
          Lihat semua
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {cards.map((c) => (
          <a
            key={c.slug}
            href={`/kategori.php?cat=${c.slug}`}
            className="group rounded-xl p-4 flex flex-col items-center text-center shadow-sm focus:outline-none focus:ring-2"
            style={{ background: c.bg, boxShadow: '0 6px 18px rgba(10,20,30,0.06)', borderRadius: '12px', color: '#0B2B34' }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white/70 ring-1 ring-white/60 flex items-center justify-center">
              <img src={c.img} alt={c.alt} className="w-16 h-16 object-contain" />
            </div>
            <span className="mt-3 text-sm sm:text-base font-semibold">{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
