import { useState } from 'react'

export default function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('')
  const [nominal, setNominal] = useState('')
  const [jenis, setJenis] = useState('Pemasukan')
  const [pesanError, setPesanError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // Nilai input berupa teks, jadi ubah menjadi angka sebelum dihitung.
    const nilaiNominal = Number(nominal)
    if (!keterangan.trim() || !nominal.trim() || !Number.isFinite(nilaiNominal) || nilaiNominal <= 0) {
      setPesanError('Isi keterangan dan nominal yang lebih besar dari 0.')
      return
    }
    onTambah({ keterangan: keterangan.trim(), nominal: nilaiNominal, jenis })
    setKeterangan('')
    setNominal('')
    setPesanError('')
  }

  return (
    <section className="panel form-panel" aria-labelledby="form-title">
      <div className="section-heading">
        <span className="section-icon" aria-hidden="true">+</span>
        <div><h2 id="form-title">Catat transaksi kas</h2><p>Dari iuran hingga dana kegiatan mahasiswa.</p></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="keterangan">Keterangan</label>
          <input id="keterangan" type="text" placeholder="Contoh: Iuran kas mingguan" value={keterangan} onChange={(event) => setKeterangan(event.target.value)} maxLength={100} required />
        </div>
        <div className="field">
          <label htmlFor="nominal">Nominal</label>
          <div className="money-input"><span aria-hidden="true">Rp</span><input id="nominal" type="number" inputMode="decimal" min="0.01" step="0.01" placeholder="0" value={nominal} onChange={(event) => setNominal(event.target.value)} required aria-describedby="nominal-hint" /></div>
          <small id="nominal-hint">Masukkan nominal tanpa pemisah ribuan.</small>
        </div>
        <div className="field">
          <label htmlFor="jenis">Jenis transaksi</label>
          <select id="jenis" value={jenis} onChange={(event) => setJenis(event.target.value)}>
            <option value="Pemasukan">Kas masuk</option>
            <option value="Pengeluaran">Kas keluar</option>
          </select>
        </div>
        {pesanError && <p className="form-error" role="alert">{pesanError}</p>}
        <button className="submit-button" type="submit"><span aria-hidden="true">+</span> Simpan transaksi</button>
      </form>
    </section>
  )
}
