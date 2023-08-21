import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import TopBar from './Components/User/TopBar/TopBar';
import NavBar from './Components/User/NavBar/NavBar';
import Footer from './Components/User/Footer/Footer';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavBar/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;
