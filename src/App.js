import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantDetails from "./Components/RestaurantDetails";

function App() {
  return (

    <Router>
      <Header />
      <main className="py-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurant/:id' element={<RestaurantDetails />} />

        </Routes>
      </main>
      <Footer />
    </Router>

  )
}

export default App;
