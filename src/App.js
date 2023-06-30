import './App.css';
import Header from './Header.js';
function App() {
  const handleTheme=()=>{

  }
  return (
    <div className="App">
      <Header handleTheme={handleTheme}></Header>
    </div>
  );
}

export default App;
