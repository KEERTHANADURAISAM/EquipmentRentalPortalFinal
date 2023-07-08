import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Testimonial from './components/Testimonial/Testimonial';
import AdminPortal from './components/Admin/AdminPortal';
import AddEquipment from './components/Equipment/AddEquipment';
import FrontPage from './components/Home/FrontPage';
import Contact from './components/Home/Contact/Contact';
import Cart from './components/Cart/Cart';
import ContactView from './components/Home/Contact/ContactView';
import Login from './components/Login/Login';
import Portal from './components/Navbar/Portal';
import Show from './components/View/Show';
import Payment from './components/Payment/Payment';


function App() {
 const [add,setAddcart]=useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Login/>}/>
        <Route path='/portal'  element={<Portal add={add}/>}>
            <Route path='home' element={<FrontPage/>}/> 
            <Route path="show" element={<Show add={add} setAddcart={setAddcart}/>}/>
            <Route path='contact'  element={<Contact/>}/>
            <Route path='cart/:id'  element={<Cart/>}/>
            <Route path='testimonial'  element={<Testimonial/>}/>     
        </Route>
        <Route path='payment' element={<Payment/>}/>
                 <Route path='/admin' element={<AdminPortal/>}>
                 <Route path='contactview'  element={<ContactView/>}/>
                 <Route path='addequipment'  element={<AddEquipment/>}/>
            </Route>
        </Routes>
      
      </BrowserRouter>     
    </div>
  );
}

export default App;
