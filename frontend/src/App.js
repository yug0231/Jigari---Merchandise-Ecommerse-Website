import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import TopBar from './Components/User/TopBar/TopBar';
import NavBar from './Components/User/NavBar/NavBar';
import Footer from './Components/User/Footer/Footer';
import { HomeGrownBrandBanner } from './Components/User/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <NavBar/>
      <AllRoutes/>
      <HomeGrownBrandBanner />
      <h2 className='h2Bottom'>Determined to make our <span style={{ "fontWeight": "bolder" }}>Jigari's Smile</span></h2>
      <Footer />
    </div>
  );
}

export default App;
