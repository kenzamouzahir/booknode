// import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import 'flowbite';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Books from'./components/Bookdetails/Books';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slick from './components/Body/Slick';


function App() {
  return (
    <div className=''>
       <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path='/books' element={<Books/>}/>
        </Routes>
      </BrowserRouter> 
      
    </div>
  );
}

export default App;
