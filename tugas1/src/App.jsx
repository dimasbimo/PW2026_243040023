import KartuProyek from './components/KartuProyek.jsx';
import { daftarProyek } from './dataProyek.js';
import './App.css';

export default function App() {
  return (
    <>
      <a className="lewati" href="#proyek">Lewati ke daftar proyek</a>
      <header className="header">
        <a className="identitas" href="#awal"><span className="monogram" aria-hidden="true">db.</span><span>dimasbimo<span className="identitas-kecil">PORTOFOLIO PENGEMBANGAN WEB</span></span></a>
        <a className="tautan-akun" href="https://github.com/dimasbimo" target="_blank" rel="noopener noreferrer">Profil GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <main id="awal" className="kontainer">
        <section className="pengantar" aria-labelledby="judul-halaman">
          <div className="label-tugas"><span aria-hidden="true" /> PRAKTIKUM WEB · TUGAS 1</div>
          <h1 id="judul-halaman">Showcase<br /><span>Portofolio Mini.</span></h1>
          <div className="ringkasan">
            <p>Eksplorasi ide, antarmuka, dan teknologi web.<br />Empat proyek dari repositori GitHub saya.</p>
            <a href="#proyek" className="tautan-jelajah">Jelajahi proyek <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section id="proyek" aria-labelledby="judul-proyek" className="bagian-proyek">
          <div className="judul-bagian"><h2 id="judul-proyek">Proyek pilihan<span className="jumlah">{String(daftarProyek.length).padStart(2, '0')}</span></h2><p>STORYTELLING / APLIKASI / KOMUNITAS</p></div>
          <div className="grid-proyek">
            {daftarProyek.map((proyek) => (
              <KartuProyek key={proyek.id} nomor={proyek.nomor} kategori={proyek.kategori} judul={proyek.judul} deskripsi={proyek.deskripsi} teknologi={proyek.teknologi} repoUrl={proyek.repoUrl} />
            ))}
          </div>
        </section>

        <section className="penutup" aria-labelledby="judul-penutup">
          <div><p className="teks-kecil">DI BALIK SETIAP PROYEK</p><h2 id="judul-penutup">Selalu ada hal baru untuk dipelajari.</h2></div>
          <a href="https://github.com/dimasbimo?tab=repositories" target="_blank" rel="noopener noreferrer">Lihat semua repositori <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <footer className="footer"><span>dimasbimo · PW2026_243040023</span><span>Modul 1 — Dasar React.js</span></footer>
    </>
  );
}
