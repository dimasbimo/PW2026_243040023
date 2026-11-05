export default function DaftarTransaksi({ transaksi, onHapus, formatRupiah }) {
  return (
    <section className="panel history-panel" aria-labelledby="history-title">
      <div className="history-heading">
        <div><h2 id="history-title">Riwayat kas</h2><p>Pantau iuran masuk dan penggunaan dana mahasiswa.</p></div>
        <span className="transaction-count" aria-live="polite">{transaksi.length} transaksi</span>
      </div>
      {transaksi.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 8V6a2 2 0 0 0-2-2H6a3 3 0 0 0 0 6h14v10H6a3 3 0 0 1-3-3V7" /><path d="M20 12h-4a2 2 0 0 0 0 4h4" /><path d="M17 14h.01M6 7h11" /></svg>
          </div>
          <h3>Belum ada transaksi kas</h3>
          <p>Mulai dengan mencatat iuran mahasiswa atau pengeluaran kegiatan melalui formulir.</p>
        </div>
      ) : (
        <ul className="transaction-list">
          {transaksi.map((item) => {
            const masuk = item.jenis === 'Pemasukan'
            return (
              <li className="transaction-item" key={item.id}>
                <span className={masuk ? 'transaction-icon income-icon' : 'transaction-icon expense-icon'} aria-hidden="true">{masuk ? '↙' : '↗'}</span>
                <div className="transaction-detail"><h3>{item.keterangan}</h3><span>{masuk ? 'Kas masuk' : 'Kas keluar'}</span></div>
                <p className={masuk ? 'transaction-amount income' : 'transaction-amount expense'}>{masuk ? '+' : '−'}{formatRupiah(item.nominal)}</p>
                <button className="delete-button" type="button" onClick={() => onHapus(item.id)} aria-label={'Hapus transaksi kas ' + item.keterangan} title="Hapus transaksi kas">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6" /></svg>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
