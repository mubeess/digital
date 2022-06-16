import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from "./components/Auth/SignUp";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

