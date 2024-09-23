import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/App.css'
import { Routes, Route } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import HomePage from './HomePage'

export default function App () {
  return (<>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/login" element={ <h1>Login</h1> } />
        <Route path="/signup" element={ <h1>Sign Up</h1> } />
      </Routes>
  </>)
}