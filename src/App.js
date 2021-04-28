import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './component/Landing';
import Navbar from './component/Navbar';
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
        <Navbar/>
              <Switch>
                <Route exact path="/" component={Landing} />
              </Switch>
            </div>
      </Router>
      </Provider>
  );
}

export default App;
