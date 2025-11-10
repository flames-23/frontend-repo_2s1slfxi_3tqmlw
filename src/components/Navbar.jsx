import { ShoppingCart, User, Search, Home } from "lucide-react";

const NAV_LINKS = [
  { label: "Semua", slug: "semua" },
  { label: "Buah", slug: "buah" },
  { label: "Sayur", slug: "sayur" },
  { label: "Bahan Pokok", slug: "bahan-pokok" },
  { label: "Daging & Protein", slug: "protein" },
  { label: "Minuman", slug: "minuman" },
  { label: "Bumbu Dapur", slug: "bumbu" },
  { label: "Camilan", slug: "snack" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-green-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <a
            href="/"
            className="flex items-center gap-2 text-[#0B2B34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9] rounded-md"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: "#A7D7A9", boxShadow: "0 6px 18px rgba(10,20,30,0.06)" }}
              aria-hidden
            >
              <Home className="text-[#0B2B34]" size={22} />
            </span>
            <span className="font-semibold text-lg">SegarMart</span>
          </a>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.slug}
                href={`/kategori.php?cat=${l.slug}`}
                className="px-3 py-2 text-sm rounded-full text-[#0B2B34]/80 hover:text-[#0B2B34] hover:bg-[#A7D7A9]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <form action="/search.php" method="get" className="hidden md:flex items-center">
              <label htmlFor="q" className="sr-only">Cari</label>
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-green-200 bg-white text-[#0B2B34]" style={{ boxShadow: "0 6px 18px rgba(10,20,30,0.06)" }}>
                <Search size={18} className="text-green-700" aria-hidden />
                <input
                  id="q"
                  name="q"
                  type="search"
                  placeholder="Cari bahan segar..."
                  className="w-48 bg-transparent placeholder:text-[#0B2B34]/50 focus:outline-none"
                  aria-label="Cari produk"
                />
              </div>
            </form>
            <a
              href="/keranjang.php"
              className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-green-200 text-[#0B2B34] hover:bg-[#A7D7A9]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
              aria-label="Buka keranjang"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 text-xs bg-[#FFC966] text-[#0B2B34] rounded-full px-1.5 py-0.5 font-semibold" aria-hidden>
                2
              </span>
            </a>
            <a
              href="/profil.php"
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-green-200 text-[#0B2B34] hover:bg-[#A7D7A9]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
              aria-label="Buka profil"
            >
              <User size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Categories */}
        <div className="lg:hidden flex gap-2 overflow-x-auto py-3 -mx-1 px-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.slug}
              href={`/kategori.php?cat=${l.slug}`}
              className="shrink-0 px-3 py-2 text-sm rounded-full bg-[#A7D7A9]/20 text-[#0B2B34] hover:bg-[#A7D7A9]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A7D7A9]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
