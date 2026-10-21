import { useState } from 'react'

import './App.css'
import KartuMenu from './components/KartuMenu'


const n = 87;

function App() {
  const jam = 9;
  return (
    <>
    
      <h2>Kantin Anugrah</h2>
      <p>{jam < 12 ? 'Selamat pagi' : 'Selamat sore'} </p>
      <p>Saldo awal kartu kantin: Rp {n * 1000}</p>
      <button disabled>Bayar</button>
      <p></p>
    
      <KartuMenu nama="Nasi Ayam Geprek" harga={10000 + (n * 100)} />
      <KartuMenu nama="Es Teh Lemon" harga={10000 + (n * 100)} kategori = "Minuman" />
      <KartuMenu nama="Mie Goreng" harga={10000 + (n * 100)} kategori = "Minuman" />
      
    </>

    
  );
}

export default App;

