import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart/Cart";

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col p-6 flex-1">
        <Cart />
      </main>
      <Footer />
    </div>
  );
}
