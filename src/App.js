import './App.css';
import Navbar from "./components/navbar/Navbar";
import Herocontainer from './components/Hero/Herocontainer';
import Parallex from './components/parallex/Parallex';
import AboutUs from './components/About/AboutUs';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <Navbar />
        <Herocontainer/>
      </section>
      <section id='About'><Parallex/></section>
      <section><AboutUs/></section>

    </div>
  );
}

export default App;
