import LabelHarga from "./LabelHarga";

const jumlah = 0;

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
  return (
    <div className="kartu">
      <h3>{nama}</h3>

      <p>Kategori: {kategori}</p>
      <LabelHarga nilai={harga} />

      
      <button onClick={() => setJumlah(jumlah + 1)}>+</button>
      <input
        type="number"
        value={jumlah}
        onChange={(e) => setJumlah(parseInt(e.target.value) || 0)}
        min="0"
      />
      <button disabled onClick={() => setJumlah(0)}>-</button>
      <p>Subtotal: Rp {jumlah * harga}</p>
      <p></p>
      <button onClick={() => setJumlah(0)}>Catatan</button>
      <p>Catatan:</p>
    </div>
  );
}

export default KartuMenu;
