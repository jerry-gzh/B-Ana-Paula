import './App.css';
import Home from './components/home/home';
import Events from './components/events/events';

function App() {
  return (
    <div className="App" basename="/tothepoint_login">
      <Home/>
      <Events/>
    </div>
  );
}

export default App;
