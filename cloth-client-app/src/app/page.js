import Navbar from "./Navbar-section/Navbar-app"
import HeroApp from "./Hero-section/Hero-app"
import ClothingPage from "./Content-section/Clothing-page-app"
import ImagesCarousel from "./Hero-section/image-slide-section/image-gallery-container"



export default function Home() {
  return (
  <>
  
  <Navbar/>
  <HeroApp/>
  <ImagesCarousel/>

  <ClothingPage/>
  
  
  </>
  )
}
