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
      </MenuProvider>
    </>
  );
}

export default App;
