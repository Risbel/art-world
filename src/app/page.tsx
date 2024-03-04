import Divider from "./components/Divider";
import LogoCarousel from "./components/LogoCarousel";
import Footer from "./sections/footer";
import Header from "./sections/header";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Divider />
      <div className="py-24">
        <LogoCarousel />
      </div>
      <Footer />
    </main>
  );
}
