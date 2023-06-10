import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLoginPage from "./pages/auth/AuthLoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UserPage from "./pages/user/UserPage";
import UserAddPage from "./pages/user/UserAddPage";
import ProfilPage from "./pages/profil/ProfilPage";
import KaryawanPage from "./pages/karyawan/KaryawanPage";
import KaryawanAddPage from "./pages/karyawan/KaryawanAddPage";
import JabatanPage from "./pages/jabatan/JabatanPage";
import GolonganPage from "./pages/golongan/GolonganPage";
import PotonganPage from "./pages/potongan/PotonganPage";
import PendapatanPage from "./pages/pendapatan/PendapatanPage";
import PenggajianInputPage from "./pages/penggajian/PenggajianInputPage";
import PenggajianListPage from "./pages/penggajian/PenggajianListPage";
import LaporanGajiPage from "./pages/laporan/LaporanGajiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/add" element={<UserAddPage />} />
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/karyawan" element={<KaryawanPage />} />
        <Route path="/karyawan/add" element={<KaryawanAddPage />} />
        <Route path="/jabatan" element={<JabatanPage />} />
        <Route path="/golongan" element={<GolonganPage />} />
        <Route path="/pendapatan" element={<PendapatanPage />} />
        <Route path="/potongan" element={<PotonganPage />} />
        <Route path="/laporan" element={<LaporanGajiPage />} />
        <Route path="/penggajian/input" element={<PenggajianInputPage />} />
        <Route path="/penggajian/list" element={<PenggajianListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
