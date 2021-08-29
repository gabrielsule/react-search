### Crear aplicación

```bash
npx create-react-app react-search

cd react-search
```

### Instalar librerías

```bash
npm i fuse.js

npm i @material-ui/core
```

### Crear datos de ejemplo

```json
[
  {
    "character": "batman",
    "editorial": "dc"
  },
  {
    "character": "superman",
    "editorial": "dc"
  },
  {
    "character": "flash",
    "editorial": "dc"
  },
  {
    "character": "aquaman",
    "editorial": "dc"
  },
  {
    "character": "ironman",
    "editorial": "marvel"
  },
  {
    "character": "thor",
    "editorial": "marvel"
  },
  {
    "character": "hulk",
    "editorial": "marvel"
  },
  {
    "character": "vision",
    "editorial": "marvel"
  }
]
```

### Código

```javascript
import { useState } from 'react'
import { TextField, Typography } from '@material-ui/core'
import Fuse from 'fuse.js'
import data from './Data/data.json'

function App() {
  const [items, setItems] = useState([])

  const options = {
    includeScore: true,
    keys: ['character', 'editorial'],
  }

  const fuse = new Fuse(data, options)

  const handleSearch = (value) => {
    const res = fuse.search(value)
    setItems(res.map((i) => i.item))
  }

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {items.map((row, index) => (
        <>
          <div>
            <Typography>
              {row.character} {row.editorial}
            </Typography>
          </div>
        </>
      ))}
    </div>
  )
}

export default App
```

### Ejecutar la aplicación

```bash
npm start
```

[http://localhost:3000](http://localhost:3000)
