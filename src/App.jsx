import { Footer } from './components/Footer/Footer';
import { Gallery } from './components/Gallery/Gallery';
import { Navbar } from './components/Navbar/Navbar';
import { Slider } from './components/Slider/Slider';
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <>
      <MenuProvider>
        <Navbar></Navbar>
        <Slider></Slider>
        <Gallery></Gallery>
        <Footer></Footer>
      </MenuProvider>
    </>
  );
}

export default App;
