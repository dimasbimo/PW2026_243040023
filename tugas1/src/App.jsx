import KartuProyek from './components/KartuProyek.jsx';
import { daftarProyek } from './dataProyek.js';
import './App.css';

function App() {
  return (
    <div className="halaman">
      <header className="header">
        <h1>Showcase Portofolio</h1>
        <p>Praktikum Pemrograman Web</p>
      </header>

      <main>
        <div className="profil">
          <div>
            <h2>Dimas Muhammad Fadhil</h2>
            <p>NPM: <strong>243040023</strong></p>
          </div>
          <a
            href="https://github.com/dimasbimo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profil GitHub
          </a>
        </div>

        <section aria-labelledby="judul-proyek">
          <h2 id="judul-proyek" className="judul-bagian">Daftar Proyek</h2>
          <p className="pengantar">
            Berikut empat proyek dari repositori GitHub saya.
          </p>

          <div className="daftar-proyek">
            {/* Setiap data ditampilkan dengan komponen KartuProyek. */}
            {daftarProyek.map((proyek) => (
              <KartuProyek
                key={proyek.id}
                judul={proyek.judul}
                deskripsi={proyek.deskripsi}
                teknologi={proyek.teknologi}
                repoUrl={proyek.repoUrl}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        Tugas 1 - Praktikum Pemrograman Web
      </footer>
    </div>
  );
}

export default App;
