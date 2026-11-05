export default function RingkasanSaldo({ pemasukan, pengeluaran, saldo, formatRupiah }) {
  return (
    <section className="summary-grid" aria-label="Ringkasan kas mahasiswa" aria-live="polite" aria-atomic="true">
      <article className="summary-card balance-card">
        <div className="card-top"><p>Saldo kas</p><span className="card-symbol" aria-hidden="true">◈</span></div>
        <p className="summary-value">{formatRupiah(saldo)}</p>
        <p className="card-caption">Kas masuk dikurangi kas keluar</p>
      </article>
      <article className="summary-card">
        <div className="card-top"><p>Total kas masuk</p><span className="card-symbol income-icon" aria-hidden="true">↙</span></div>
        <p className="summary-value income">{formatRupiah(pemasukan)}</p>
        <p className="card-caption">Iuran dan dana kegiatan yang diterima</p>
      </article>
      <article className="summary-card">
        <div className="card-top"><p>Total kas keluar</p><span className="card-symbol expense-icon" aria-hidden="true">↗</span></div>
        <p className="summary-value expense">{formatRupiah(pengeluaran)}</p>
        <p className="card-caption">Pengeluaran untuk kegiatan mahasiswa</p>
      </article>
    </section>
  )
}
