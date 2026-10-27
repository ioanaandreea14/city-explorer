import { useState } from 'react';
import { destinatii as destinatiiInitiale } from './data/destinatii.js';
import { getNevizitate, totalZile, marcheazaVizitat, adaugaDestinatie } from './utils/destinatii.js';
import Rezumat from './components/Rezumat.jsx';
import FormularDestinatie from './components/FormularDestinatie.jsx';
import ListaDestinatii from './components/ListaDestinatii.jsx';
import './App.css';

export default function App() {
  const [destinatii, setDestinatii] = useState(destinatiiInitiale);

  const total = destinatii.length;
  const nevizitateList = getNevizitate(destinatii);
  const nevizitate = nevizitateList.length;
  const zile = totalZile(nevizitateList);

  function handleToggle(id) {
    setDestinatii((curent) => marcheazaVizitat(curent, id));
  }

  function handleAdd(nouaDestinatie) {
    setDestinatii((curent) => adaugaDestinatie(curent, nouaDestinatie));
  }

  // function handleDelete(id) {
  //   setDestinatii((curent) => curent.filter((d) => d.id !== id));
  // }

  return (
      <main>
        <h1>City Explorer</h1>
        <Rezumat total={total} nevizitate={nevizitate} zile={zile} />
        <FormularDestinatie onAdd={handleAdd} />
        <ListaDestinatii
            destinatii={destinatii}
            onToggle={handleToggle}
            // onDelete={handleDelete}
        />
      </main>
  );
}