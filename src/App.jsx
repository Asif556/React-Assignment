import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopX from './Components/Popx';
import Login from './Components/Login';
import './App.css';
import Create from './Components/Create';
import Account from './Components/Account';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopX />} />
        <Route path="/login" element={<Login />} />
        <Route path="create" element={<Create/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </Router>
  );
}

export default App;
