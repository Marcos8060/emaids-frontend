import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Logout from './components/Logout';
import Login from './components/Login';
import Footer from './components/Footer';
import Maids from './components/Maids';
import Profile from './components/Profile';
import About from './components/About';
import Search from './components/Search';
import Private from './components/Private';
import Admin from './components/Admin';
import Delete from './components/admin/Delete';
import Edit from './components/Edit'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <Header />
        <Navbar />
        <Routes>
            <Route exact path='/' element={ < App />}></Route>
            <Route exact path='/register' element={< Register/>}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/logout' element={< Logout />}></Route>
            <Route exact path='/maids' element={< Maids />}></Route>
            <Route exact path='/profiles/:id' element={< Profile />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route exact path='/search' element={< Search />}></Route>
            <Route exact path='/private' element={< Private />}></Route>
            <Route exact path='/admin/profiles' element={< Admin />}></Route>
            <Route exact path='/admin/delete/:id' element={< Delete />}></Route>
            <Route exact path='/edit/:id' element={< Edit />}></Route>
        </Routes>
        <Footer />
    </React.StrictMode>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
