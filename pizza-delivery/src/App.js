import './App.css';
import Login from './components/Login';
import Registerr from './components/Registerr';
import ReactDOM from "react-dom/client";
import {Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Registerr/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
