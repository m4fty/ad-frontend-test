import Header from "@/components/Header";
import Footer from "@/components/Footer";

import GameCatalog from "@/components/Games/GameCatalog";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col">
        <GameCatalog />
      </main>
      <Footer />
    </div>
  );
}
