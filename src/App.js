import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import LightDarkModeHandler from './Components/LightDarkModeHandler/LightDarkModeHandler';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <LightDarkModeHandler /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
