import './App.scss';
import Catalog from './components/Catalog';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Hero from './components/Hero';

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
