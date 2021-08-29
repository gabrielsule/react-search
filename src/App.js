import { useState } from 'react';
import { TextField, Typography } from '@material-ui/core';
import Fuse from 'fuse.js';
import data from './Data/data.json';

function App() {
  const [items, setItems] = useState([]);

  const options = {
    includeScore: true,
    keys: ['character', 'editorial']
  };

  const fuse = new Fuse(data, options);

  const handleSearch = (value) => {
    const res = fuse.search(value);
    setItems(res.map(i => i.item));
  }

  return (
    <div>
      <TextField label="Search" variant="outlined" onChange={(e) => handleSearch(e.target.value)} />

      {items.map((row, index) => (
        <>
          <div>
            <Typography>{row.character} {row.editorial}</Typography>
          </div>

        </>
      ))}
    </div>
  );
}

export default App;
