import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css'
import NavigationBar from "./components/NavigationBar";
import HomePage from './pages/HomePage'

export default function App () {
  return (<>
      <NavigationBar />
      <HomePage />
  </>)
}