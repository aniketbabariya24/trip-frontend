import './App.css';
import Nav from './nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddDetails from './components/AddDetails';
import TripList from './components/TripList';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/add' element={<AddDetails/>}/>
      <Route path='/see' element={<TripList/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
