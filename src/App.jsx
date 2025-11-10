import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductSection from './components/ProductSection';

function Footer() {
  return (
    <footer className="mt-12 border-t border-green-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-[#0B2B34]/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} SegarMart — Belanja sembako modern, cepat, dan hemat.
          </p>
          <nav className="flex items-center gap-4">
            <a href="/" className="hover:underline">Beranda</a>
            <a href="/keranjang.php" className="hover:underline">Keranjang</a>
            <a href="/transaksi.php" className="hover:underline">Transaksi</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0B2B34]">
      <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-[#0B2B34] focus:px-3 focus:py-2 focus:rounded-md focus:ring-2 focus:ring-[#A7D7A9]">Lewati ke konten</a>
      <Navbar />
      <main id="konten">
        <Hero />
        <CategoryGrid />
        <ProductSection />
      </main>
      <Footer />
    </div>
  );
}
