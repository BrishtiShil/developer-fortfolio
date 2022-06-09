import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';
import Project from './Pages/Home/Project';
import Resume from './Pages/Home/Resume';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="project" element={<Project></Project>}></Route>
        <Route path="resume" element={<Resume></Resume>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
