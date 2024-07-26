import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Student from './pages/Student';
import AddStudent from './pages/AddStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
