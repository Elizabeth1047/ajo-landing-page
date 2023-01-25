import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Footer from './components/Footer';
import Toplayer from './components/Toplayer';
import Hambuger from './components/Hambuger';

function App() {
const [showhambuger,setshowhambuger]=useState(false)
  return (
    <div className="App">
      <Nav
        setshowhambuger={setshowhambuger}
        showhambuger={showhambuger}
      />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <Toplayer />
      {showhambuger ? <Hambuger /> : null}
    </div>
  );
}

export default App;
