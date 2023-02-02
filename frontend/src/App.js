import {Route, Router, Routes} from 'react-router-dom'
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
