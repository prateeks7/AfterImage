import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Grid from './components/Grid/Grid';
import Home from './pages/Home';
import Create from './pages/Create';


function App() {
  return (
    <Router>
      <Grid>
        <Routes>
          <Route path='/AfterImage/' element = {<Home></Home>} ></Route>
          <Route path='/AfterImage/Create' element = {<Create></Create>} ></Route>
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;