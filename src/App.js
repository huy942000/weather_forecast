import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Narbar from "./Components/Layout/Narbar"
import Defaultlayout from "./Components/Layout/DefaultLayout"
import Home from './Pages/Now'
import Hourly from './Pages/Hourly'
import Daily from './Pages/Daily'


function App() {
  return (
    <BrowserRouter>
      <div>
      <Defaultlayout />
        <Narbar />
        <Switch>

          <Route path='/' component={Home} exact />
          <Route path='/now' component={Home} exact />
          <Route path='/hourly' component={Hourly} />
          <Route path='/daily' component={Daily} />
        

          {/* <Route component={PageNotFound}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
