import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import Home from './../src/components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveAppBar/> */}
      <Home/>
    </div>
  );
}

export default App;
