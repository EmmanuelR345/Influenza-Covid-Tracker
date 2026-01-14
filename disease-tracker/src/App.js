import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Home from './Home';
import Covid from './Covid';
import Influenza from './Influenza';

function App() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Router>
      <div className="App">

        {/* ---------- Navigation ---------- */}
        <nav className="nav-bar">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/covid" className="nav-button">COVID-19</Link>
          <Link to="/influenza" className="nav-button">Influenza</Link>
        </nav>

        {/* ---------- Controls ---------- */}
        <FormControl className="dark-select" sx={{ m: 2, minWidth: 120 }}>
          <InputLabel id="age-label">Age</InputLabel>
          <Select
            labelId="age-label"
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        {/* ---------- Routes ---------- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid" element={<Covid />} />
          <Route path="/influenza" element={<Influenza />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
