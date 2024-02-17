import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/header';
// import SignUp from './components/signup';
import Home from './components/home';
import Footer from './components/footer';
import Contact from './components/contact';
import Singlepage from './components/single';
import RegisterForm from './components/login';


function App() {
  return (
  <>
   
    <BrowserRouter>
    <Header/>
      <Routes>
       
          <Route path="/" element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="singlepage" element={<Singlepage/>} />
          <Route path="signup" element={<RegisterForm/>} />
         
      </Routes>
      <Footer/>
    </BrowserRouter>
  
  </>

  );
}

export default App;
