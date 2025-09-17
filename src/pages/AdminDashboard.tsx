import PageTemplate from '../components/PageTemplate';

const AdminDashboard = () => {
  return (
    <PageTemplate
      title="Dasbor Admin"
      description="Area ini hanya untuk pengguna dengan hak akses khusus."
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Selamat Datang, Admin!</h2>
        <p>Di sini Anda akan dapat mengelola berita, pengguna, dan konten lainnya.</p>
      </div>
    </PageTemplate>
  );
};

export default AdminDashboard;