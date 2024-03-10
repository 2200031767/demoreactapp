//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import MainNavBar from './main/MainNavBar';
import AdminNavBar from './admin/AdminNavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {


  
  return (
    <div className="App">
   <h3 align= "center"> <font color="#6a4c93"> <b> ShopMart</b>  </font> </h3>   
   <Router>
    <MainNavBar/>
    <AdminNavBar/>
    
   </Router>

    </div>
  );
}

export default App;
