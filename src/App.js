
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './component/Navbar';
import PostOverview from './pages/PostOverview';
import Profile from './pages/Profile';

function App() {
  return (
    // <div className="App">
    //   {/* <Login/> */}
    //   <Signup/>
    // </div>
    <div className='app-bg'>
     
      <Router>
       <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Signup/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
          <Route exact path='/signup' element = {<Signup/>}></Route>
          <Route exact path='/posts' element = {<PostOverview/>}></Route>
          <Route exact path='/myProfile' element = {<Profile/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
