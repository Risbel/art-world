import Divider from "./components/Divider";
import LogoCarousel from "./components/LogoCarousel";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import Revindications from "./components/sections/revindications";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Divider />
      <div className="py-24">
        <LogoCarousel />
      </div>
      <Divider />
      <Revindications />
      <Footer />
    </main>
  );
}
