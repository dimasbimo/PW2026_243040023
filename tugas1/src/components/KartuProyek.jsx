// Props berisi informasi satu proyek dari App.
function KartuProyek({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <article className="kartu-proyek">
      <h3>{judul}</h3>
      <p className="deskripsi-proyek">{deskripsi}</p>

      <ul className="daftar-teknologi" aria-label="Teknologi proyek">
        {teknologi.map((namaTeknologi) => (
          <li key={namaTeknologi}>#{namaTeknologi}</li>
        ))}
      </ul>

      <a
        className="tombol-repo"
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'Lihat ' + judul + ' di GitHub (tab baru)'}
      >
        Lihat di GitHub
      </a>
    </article>
  );
}

export default KartuProyek;
