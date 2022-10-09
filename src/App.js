
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Home from './view/home'
import Products from './view/products'
import SingleProduct from './view/products/SingleProduct';
import Contact from './view/contact'
import PageNotFound from './view/pagenofound'


const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} >
          <Route path=":itemId" element={<Products />} />
         
        </Route>
        <Route path="products/single-product/:catId" element={<SingleProduct />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
