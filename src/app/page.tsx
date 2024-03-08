import Divider from "./components/Divider";
import LogoCarousel from "./components/LogoCarousel";
import Footer from "./components/sections/footer";
import Header from "./components/sections/header";
import Navbar from "./components/sections/navbar";
import Revindications from "./components/sections/revindications";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Header />
      <Divider />
      <div className="lg:py-16">
        <LogoCarousel />
      </div>
      <Divider />
      <Revindications />
      <Footer />
    </main>
  );
}
