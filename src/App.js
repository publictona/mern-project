import './App.css';
import NavBar from "./component/Navbar"
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Footer from './component/Footer';
import SignUp  from './component/SignUp';
import Login from './component/Login'
//import Image  from './component/Image';



function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <NavBar/>
      <Footer/>
     
      <Routes>
        <Route path="/"   element={<h1>"product listing component"</h1>}/>
        <Route path="/SignUp" element={  <SignUp/>}/>
        <Route path="/Login" element={  <Login/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
