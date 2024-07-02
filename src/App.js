import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import Spacing from './components/Spacing';
import Status from './components/Status';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div class="dark:bg-[#20242d]">
      <Header />

      <Spacing size={"md"}/>

      <Hero />

      <Spacing size={"md"}/>

      <Status/>

      <Spacing size={"md"}/>

      <Skills />

      <Spacing size={"md"}/>

      <Contact />
      
      <Spacing size={"md"}/>

      <Footer />
    </div>
  );
}

export default App;
