import { BrowserRouter,
         Routes,
         Route
         } from 'react-router-dom';



import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import SearchPage from './components/Search/SearchPage'
import Donateblood from './components/Donateblood';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import BloodStocks from './components/admin/BloodStocks';
import ShowDonor from './components/admin/ShowDonor';
import AddBloodBag from './components/admin/AddBloodBag';
import Employees from './components/admin/Employees';
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
            <Route path="/login" element={<Login />} />
            <Route path="/bloodStocks" element={<BloodStocks />} />
            <Route path="/donors" element={<ShowDonor />} />
            <Route path="/addBloodBag" element={<AddBloodBag />} />
            <Route path="/showEmployees" element={<Employees />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
