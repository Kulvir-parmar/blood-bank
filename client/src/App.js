import { BrowserRouter,
         Routes,
         Route
         } from 'react-router-dom';



import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import SearchPage from './components/Search/SearchPage'
import Donateblood from './components/Donateblood';
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/stockAvailability" element={<SearchPage />} />
            <Route path="/DonateBlood" element={<Donateblood />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
