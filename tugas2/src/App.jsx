import { useEffect, useState } from 'react'
import FormTransaksi from './FormTransaksi'
import RingkasanSaldo from './RingkasanSaldo'
import DaftarTransaksi from './DaftarTransaksi'
import './App.css'

const STORAGE_KEY = 'catatan-keuangan-mini-transaksi'
const formatRupiah = (nilai) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 2,
}).format(nilai)

function muatTransaksi() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    if (!Array.isArray(data)) return []
    return data.filter((item) => item && typeof item.id === 'string'
      && typeof item.keterangan === 'string' && item.keterangan.trim()
      && Number.isFinite(item.nominal) && item.nominal > 0
      && ['Pemasukan', 'Pengeluaran'].includes(item.jenis))
  } catch {
    return []
  }
}

function App() {
  // Lazy initializer membaca data sebelum efek penyimpanan pertama berjalan.
  const [transaksi, setTransaksi] = useState(muatTransaksi)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transaksi))
    } catch (error) {
      console.error('Transaksi gagal disimpan di browser.', error)
    }
  }, [transaksi])

  const pemasukan = transaksi.reduce((total, item) =>
    item.jenis === 'Pemasukan' ? total + item.nominal : total, 0)
  const pengeluaran = transaksi.reduce((total, item) =>
    item.jenis === 'Pengeluaran' ? total + item.nominal : total, 0)
  const saldo = pemasukan - pengeluaran

  function tambahTransaksi(data) {
    setTransaksi((sebelumnya) => [{ ...data, id: crypto.randomUUID() }, ...sebelumnya])
  }

  function hapusTransaksi(id) {
    setTransaksi((sebelumnya) => sebelumnya.filter((item) => item.id !== id))
  }

  return (
    <div className="app-shell">
      <main className="dashboard">
        <div className="page-heading">
          <div>
            <h1>KAS MAHASISWA</h1>
            <p className="subtitle">Kelola iuran dan pengeluaran kas mahasiswa dalam satu tempat.</p>
          </div>
        </div>
        <RingkasanSaldo pemasukan={pemasukan} pengeluaran={pengeluaran} saldo={saldo} formatRupiah={formatRupiah} />
        <div className="content-grid">
          <FormTransaksi onTambah={tambahTransaksi} />
          <DaftarTransaksi transaksi={transaksi} onHapus={hapusTransaksi} formatRupiah={formatRupiah} />
        </div>
      </main>
    </div>
  )
}

export default App
