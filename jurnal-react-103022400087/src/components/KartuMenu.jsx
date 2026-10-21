import LabelHarga from "./LabelHarga";

function KartuMenu({ nama, harga, kategori='Makanan' }) {
  return (
    <div className="kartu">
      <h3>{nama}</h3>
      
      <p>Kategori: {kategori}</p>
      <LabelHarga nilai={harga} />
    </div>
  );
}

export default KartuMenu;