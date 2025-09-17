import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const Profile = () => {
  const { session, supabase } = useAuth();

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Profil Pengguna</h1>
      <p className="mb-4">Selamat datang, {session.user.email}</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;