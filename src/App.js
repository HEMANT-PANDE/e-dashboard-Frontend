import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav />
            <Routes>
              <Route element={<PrivateComponent />}>
              <Route path='/' element={<h1>Product Listing Component</h1>} />
              <Route path='/add' element={<AddProduct />} />
              <Route path='/update' element={<h1>Update Product  Component</h1>} />
              <Route path='/logout' element={<h1>Logout Product  Component</h1>} />
              <Route path='/profile' element={<h1>Profile Product  Component</h1>} />
              </Route>
              
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        
        </div>
  );
}

export default App;
