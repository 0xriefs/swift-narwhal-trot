import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import all the pages
import Dashboard from './pages/Dashboard';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import InfoAkademik from './pages/InfoAkademik';
import JalurKarir from './pages/JalurKarir';
import PPDB from './pages/PPDB';
import Prestasi from './pages/Prestasi';
import Catalogue from './pages/Catalogue';
import Layanan from './pages/Layanan';
import Mitra from './pages/Mitra';
import ProyekUnggulan from './pages/ProyekUnggulan';
import TentangKami from './pages/TentangKami';
import Agenda from './pages/Agenda';
import Berita from './pages/Berita';
import GaleriFoto from './pages/GaleriFoto';
import GaleriVideo from './pages/GaleriVideo';
import Fasilitas from './pages/Fasilitas';
import Kurikulum from './pages/Kurikulum';
import ProfilKeahlian from './pages/ProfilKeahlian';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import VisiMisi from './pages/VisiMisi';
import LMSCourse from './pages/LMSCourse';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
            <Route path="/info-akademik" element={<InfoAkademik />} />
            <Route path="/jalur-karir" element={<JalurKarir />} />
            <Route path="/ppdb" element={<PPDB />} />
            <Route path="/prestasi" element={<Prestasi />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/mitra" element={<Mitra />} />
            <Route path="/proyek-unggulan" element={<ProyekUnggulan />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/galeri-foto" element={<GaleriFoto />} />
            <Route path="/galeri-video" element={<GaleriVideo />} />
            <Route path="/fasilitas" element={<Fasilitas />} />
            <Route path="/kurikulum" element={<Kurikulum />} />
            <Route path="/profil-keahlian" element={<ProfilKeahlian />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/lms-course" element={<LMSCourse />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;