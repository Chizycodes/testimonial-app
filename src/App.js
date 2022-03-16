import TopNav from "./components/Nav/TopNav";
import NavSecond from "./components/NavSecond/NavSecond";
import Hero from "./components/Hero/Hero";
import FirstBanner from "./components/Banner/FirstBanner";
import SecondBanner from "./components/Banner/SecondBanner";
import FirstSection from "./components/Testimonies/FirstSection";
import SecondSection from "./components/Testimonies/SecondSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <TopNav />
      <NavSecond />
      <Hero />
      <FirstBanner />
      <FirstSection />
      <SecondBanner />
      <SecondSection />
      <Footer />
    </div>
  );
}

export default App;
