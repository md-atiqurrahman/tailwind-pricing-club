import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <h1 className='text-3xl'>Welcome to my pricing club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
