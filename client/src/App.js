import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Grid from './components/Grid';
import Home from './pages/Home';
import Create from './pages/Create';


function App() {
  return (
    <Router>
      <Grid>
        <Routes>
          <Route path='/' element = {<Home></Home>} ></Route>
          <Route path='/Create' element = {<Create></Create>} ></Route>
        </Routes>
      </Grid>
    </Router>
  );
}

export default App;