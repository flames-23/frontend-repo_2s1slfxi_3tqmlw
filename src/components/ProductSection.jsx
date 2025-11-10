import { Star } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Apel Fuji Premium",
    price: 32000,
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop",
    stock: "Stok Terbatas",
    rating: 4.7,
    flash: true,
  },
  {
    id: 2,
    name: "Bayam Organik",
    price: 8000,
    img: "https://images.unsplash.com/photo-1546549039-49ccb2d5d16b?q=80&w=800&auto=format&fit=crop",
    stock: "Stok Aman",
    rating: 4.6,
    flash: false,
  },
  {
    id: 3,
    name: "Beras Premium 5kg",
    price: 72000,
    img: "https://images.unsplash.com/photo-1586201375754-1421e0aa2a97?q=80&w=800&auto=format&fit=crop",
    stock: "Flash Sale",
    rating: 4.5,
    flash: true,
  },
  {
    id: 4,
    name: "Susu Low Fat 1L",
    price: 19000,
    img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800&auto=format&fit=crop",
    stock: "Baru Datang",
    rating: 4.4,
    flash: false,
  },
];

function formatIDR(num) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);
}

function ProductCard({ p }) {
  return (
    <a
      href={`/produk.php?id=${p.id}`}
      className="group rounded-xl bg-white overflow-hidden border border-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
      style={{ boxShadow: "0 6px 18px rgba(10,20,30,0.06)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
        {p.flash && (
          <span className="absolute left-3 top-3 rounded-full bg-[#FFC966] text-[#0B2B34] text-xs font-semibold px-2 py-1 shadow">
            Flash Sale
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm sm:text-base font-semibold text-[#0B2B34] line-clamp-2">{p.name}</h3>
        <div className="mt-1 text-green-800 font-bold">{formatIDR(p.price)}</div>
        <div className="mt-2 flex items-center justify-between text-xs text-[#0B2B34]/70">
          <span>{p.stock}</span>
          <span className="inline-flex items-center gap-1">
            <Star size={14} className="text-yellow-500 fill-yellow-500" /> {p.rating}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ProductSection() {
  return (
    <section className="py-8 sm:py-12 bg-[#A7D7A9]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#0B2B34]">Rekomendasi Segar Hari Ini</h2>
          <a href="/produk.php" className="text-sm text-[#0B2B34] hover:underline">Lihat semua</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
