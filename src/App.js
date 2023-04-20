import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import { CartProvider } from './context/CartContext'

import { NotificationProvider } from './notification/NotificationService';

import Footer from './components/Footer/Footer' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Sidebar />
            <br/>
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer greeting={'Detalles del producto'}/>}/>
              <Route path="/cart" element={<Cart greeting={'Carrito de compras'}/>}/>
              <Route path="/checkout" element={<Checkout greeting={'Checkout'} />}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
