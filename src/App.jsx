import { NavBar } from './components/NavBar/NavBar';
import { Contacto } from './components/Contacto/Contacto';
import { VideoDisplay } from './components/VideoDisplay/VideoDisplay';
// import Cartel from './components/Cartel/Cartel';
import Catalog from './components/Catalog/Catalog';
import Nosotros from './components/Nosotros/Nosotros';
import Footer from './components/Footer/Footer';

export const App = () => {
  return (
    <>
      <NavBar />
      <VideoDisplay />
      {/* <Cartel /> */}
      <Catalog />
      <Contacto />
      <Nosotros />
      <Footer />
    </>
  );
};
