import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Apel Fuji Premium',
    price: 28900,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1600&auto=format&fit=crop',
    rating: 4.7,
    badge: 'Stok Terbatas',
  },
  {
    id: 2,
    name: 'Bayam Organik 250g',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    rating: 4.5,
    badge: 'Flash Sale',
  },
  {
    id: 3,
    name: 'Beras Premium 5kg',
    price: 78900,
    image: 'https://images.unsplash.com/photo-1561635741-2d1e5f7f1f3f?q=80&w=1600&auto=format&fit=crop',
    rating: 4.8,
    badge: 'Terlaris',
  },
  {
    id: 4,
    name: 'Telur Kampung 10 butir',
    price: 33900,
    image: 'https://images.unsplash.com/photo-1517957754645-7085d5e06d46?q=80&w=1600&auto=format&fit=crop',
    rating: 4.6,
    badge: 'Baru',
  },
];

function formatIDR(value) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
}

function ProductCard({ product }) {
  return (
    <a
      href={`/produk.php?id=${product.id}`}
      className="group overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2"
      style={{ boxShadow: '0 6px 18px rgba(10,20,30,0.06)', color: '#0B2B34' }}
    >
      <div className="relative aspect-[4/3] w-full">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ backgroundColor: '#FFC966', color: '#0B2B34' }}>
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm sm:text-base font-semibold line-clamp-2">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold" style={{ color: '#0B2B34' }}>{formatIDR(product.price)}</p>
          <div className="flex items-center gap-1 text-[#0B2B34]/70">
            <Star className="h-4 w-4 fill-[#FFC966] stroke-[#FFC966]" aria-hidden="true" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        <button
          className="mt-3 w-full rounded-xl px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2"
          style={{ backgroundColor: '#A7D7A9', color: '#0B2B34' }}
          type="button"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold" style={{ color: '#0B2B34' }}>Rekomendasi Hari Ini</h2>
        <a href="/produk.php" className="text-sm font-medium underline" style={{ color: '#0B2B34' }}>
          Jelajahi semua
        </a>
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
