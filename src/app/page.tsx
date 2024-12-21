import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 font-bold text-4xl text-blue-600">
        Hello, world!
      </main>
      <Footer />
    </div>
  );
}
