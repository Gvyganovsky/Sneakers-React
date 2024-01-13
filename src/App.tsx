import './App.scss';
import Catalog from './components/Catalog/Catalog';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Drawer />
      <section className="App">
        <Header />
        <Hero />
        <Catalog />
      </section>
    </>
  );
}

export default App;
