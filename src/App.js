import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Servies from './components/Servies/Servies';
import Contact from './components/Contact/Contact';
import MyOrder from './components/MyOrder/MyOrder';
import Galary from './components/Galary/Galary';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Headers/Header';
import Logins from './components/Logins/Logins';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Logins/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/home">
           <Home></Home>
          </Route>
          <PrivateRoute path="/servies">
            <Servies></Servies>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/myorder/:servieId">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path="/galary">
            <Galary></Galary>
          </Route>
          <Route path="/login">
            <Logins></Logins>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
