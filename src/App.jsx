import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home'
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import NavbarMobile from './components/layout/NavbarMobile';

function App() {
  return (
    <Router>
      <Navbar/>
      <NavbarMobile/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
};
export default App;
