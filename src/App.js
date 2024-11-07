// src/App.js
import { AuthProvider } from './api/AuthContext'; // Adjust this path if needed
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Login from './components/Banner/Login'; // Import Login component
import Signup from './components/Banner/Signup'; // Import Signup component
import SearchResultsPage from './components/AdvanceSearch/SearchResultPage';
import About from './components/about/About';
import Destination from './components/Destination';
import Contact from './components/Contact';
import Gallery from './components/gallery';
import BookingPage from './components/BookingPage';
import Detail from './components/Detail';
import Cards from './components/Cards/Cards'
import TajMahal from "./assets/images/popular/Taj_Mahal.png";
import Goa from "./assets/images/popular/Goa.jpeg"; 
import Varanasi from "./assets/images/popular/varansi.webp"; 
import Kerala from "./assets/images/popular/Kerala.jpeg"; 
import LehLadakh from "./assets/images/popular/LehLadakh.jpeg"; 
import Mysore from "./assets/images/popular/Mysore.jpeg"; 
import Jaipur from "./assets/images/popular/jaipur.jpeg"; 
import Rishikesh from "./assets/images/popular/Rishikesh.jpeg";
import HotelList from './components/HotelList';
function App() {

    const destinations=[
        {
          id: 0,
          title: "Taj Mahal",
          image: TajMahal,
          location: "Agra, Uttar Pradesh",
          category: ["Historical", "Cultural"],
          days: "1 day",
          price: 50000,
          afterDiscount: 45000,
          rating: 5,
          reviews: 150,
        },
        {
          id: 1,
          title: "Goa",
          image: Goa,
          location: "Goa, India",
          category: ["Beach", "Adventure"],
          days: "3 days - 2 nights",
          price: 20000,
          afterDiscount: 18000,
          rating: 4.5,
          reviews: 120,
        },
        {
          id: 2,
          title: "Varanasi",
          image: Varanasi,
          location: "Varanasi, Uttar Pradesh",
          category: ["Spiritual", "Cultural"],
          days: "2 days - 1 night",
          price: 15000,
          afterDiscount: 14000,
          rating: 4,
          reviews: 90,
        },
        {
          id: 3,
          title: "Kerala Backwaters",
          image: Kerala,
          location: "Kerala, India",
          category: ["Nature", "Relaxation"],
          days: "2 days - 1 night",
          price: 30000,
          afterDiscount: 28000,
          rating: 5,
          reviews: 110,
        },
        {
          id: 4,
          title: "Leh-Ladakh",
          image: LehLadakh,
          location: "Leh, Jammu & Kashmir",
          category: ["Adventure", "Nature"],
          days: "5 days - 4 nights",
          price: 80000,
          afterDiscount: 75000,
          rating: 5,
          reviews: 200,
        },
        {
          id: 5,
          title: "Mysore",
          image: Mysore,
          location: "Mysore, Karnataka",
          category: ["Historical", "Cultural"],
          days: "2 days - 1 night",
          price: 18000,
          afterDiscount: 16000,
          rating: 4.5,
          reviews: 85,
        },
        {
          id: 6,
          title: "Jaipur",
          image: Jaipur,
          location: "Jaipur, Rajasthan",
          category: ["Historical", "Cultural"],
          days: "3 days - 2 nights",
          price: 30000,
          afterDiscount: 28000,
          rating: 4.5,
          reviews: 100,
        },
        {
          id: 7,
          title: "Rishikesh",
          image: Rishikesh,
          location: "Rishikesh, Uttarakhand",
          category: ["Adventure", "Spiritual"],
          days: "3 days - 2 nights",
          price: 25000,
          afterDiscount: 23000,
          rating: 4,
          reviews: 95,
        },
      ];
    return (
        <AuthProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/booking/:id" element={<BookingPage />} />
                <Route path="/search-results" element={<SearchResultsPage />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Cards destinations={destinations} />} />
                <Route path="/detail/:id" element={<Detail destinations={destinations} />} />
                <Route path="/hotellist" element={<HotelList />} />
            </Routes>
            <Footer />
        </AuthProvider>
    );
}

export default App;