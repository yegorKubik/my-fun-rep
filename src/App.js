import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

function App() {
  const navbarLinks = [
    {navName: "Home"},
    {navName: "About Us"},
    {navName: "Contacts"}
  ]
  return (
    <div>
      <div>
        <header>
          <Header></Header>
        </header>
      </div>
    </div>
    
  );
}

export default App;
