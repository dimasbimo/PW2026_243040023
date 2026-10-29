// Props diambil melalui destructuring; satu komponen digunakan untuk semua proyek.
export default function KartuProyek({ nomor, kategori, judul, deskripsi, teknologi, repoUrl }) {
  return (
    <article className="kartu-proyek">
      <div className="kepala-kartu">
        <span className="nomor-proyek">{nomor}</span>
        <span className="kategori-proyek">{kategori}</span>
        <span className="simbol-kode" aria-hidden="true">{'</>'}</span>
      </div>
      <h3>{judul}</h3>
      <p className="deskripsi-proyek">{deskripsi}</p>
      <ul className="daftar-teknologi" aria-label={`Teknologi ${judul}`}>
        {teknologi.map((namaTeknologi) => (
          <li key={namaTeknologi}>#{namaTeknologi.replaceAll(' ', '')}</li>
        ))}
      </ul>
      <a className="tombol-repo" href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Lihat repositori GitHub ${judul} (tab baru)`}>
        <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.08.67-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.41.1-2.94 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0 1 12 6.24c.94 0 1.88.13 2.77.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.66.1 2.94.71.77 1.14 1.76 1.14 2.97 0 4.26-2.6 5.2-5.07 5.48.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
        Lihat Repositori GitHub
        <span className="panah" aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
