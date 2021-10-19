import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import YourStory from './Pages/YourStory/YourStory';
import Freebies from './Pages/Freebies/Freebies';
import Team from './Pages/Team/Team';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path="/story">
              <YourStory></YourStory>
            </PrivateRoute>

            <PrivateRoute path="/freebies">
              <Freebies></Freebies>
            </PrivateRoute>


            <Route path="/team">
              <Team></Team>
            </Route>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
