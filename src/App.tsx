import './App.scss';
import Catalog from './components/Catalog/Catalog';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <section className="App">
      <Header />
      <Hero />
      <Catalog />
    </section>
  );
}

export default App;
