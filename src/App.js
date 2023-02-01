import './App.css';
import Bottom from './components/bottom';
import Buttons from './components/buttons';
import Header from './components/header';
import InputNumber from './components/inputNumber';
import SocialLinks from './components/socialLinks';
import State from './components/state';


function App() {
  return (
    <div className="App">
      <Header/>
      <State/>
      <InputNumber/>
      <Buttons/>
      <Bottom/>
      <SocialLinks/>
    </div>
  );
}

export default App;
