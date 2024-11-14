
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Loginsignup from './pages/Loginsignup';
import Footer from './Components/footer/Footer';
import men_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import Login from './Components/login/Login';
import Address from './pages/Form';
import Final from './pages/Final';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/dryfruits' element={<Shopcategory banner={men_banner} cate="dryfruits"/>} />
        <Route path='/vegetables' element={<Shopcategory banner={women_banner} cate="vegetables"/>} />
        <Route path="/products" element={<Product />} >
          <Route path=':productid' element={<Product />} />
        </Route>
       
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/loginpage'element={<Loginsignup/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/address'element={<Address/>}/>
        <Route path='/orderplaced'element={<Final/>}/>
        
        

      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
