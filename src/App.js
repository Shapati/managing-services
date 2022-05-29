
import './App.css';
import { Feature } from './components/feature/Feature';
import { Getstarted } from './components/getstarted/Getstarted';
import { Illustration } from './components/Illustration/Illustration';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Sponsors } from './components/sponsors/Sponsors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Sponsors />
      <Illustration />
      <Getstarted />
      <Feature />
    </div>
  );
}

export default App;
