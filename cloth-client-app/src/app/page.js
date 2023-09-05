import Navbar from './components/Navbar-section/Navbar-app';
import HeroApp from './components/Hero-section/Hero-app';
import ClothingPage from './components/Content-section/Clothing-page-app';
import ContactPage from './components/Contact-section/Contact-app';
import ContainerCarouselCateg from './components/Carousel-categ-section/Container-carousel-categ-app';

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <HeroApp />
      <ContainerCarouselCateg />
      <ClothingPage />
      <ContactPage />
    </div>
  );
}
