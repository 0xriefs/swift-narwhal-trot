import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { supabase } from '../integrations/supabase/client';

const Profile = () => {
  const { session } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const getProfile = async () => {
      if (!session?.user) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select(`*`)
          .eq('id', session.user.id)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setProfile(data);
          setFullName(data.full_name || '');
        }
      } catch (error) {
        console.error('Error fetching profile:', error.message);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [session]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!session?.user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: fullName })
        .eq('id', session.user.id);

      if (error) {
        throw error;
      }
      alert('Profil berhasil diperbarui!');
      // Refresh profile data
      setProfile({ ...profile, full_name: fullName });
    } catch (error) {
      alert('Gagal memperbarui profil: ' + error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-16 text-center">Memuat profil...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="w-full max-w-lg p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Profil Pengguna</h1>
          <p className="text-gray-400">Selamat datang, {profile?.full_name || session.user.email}</p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              value={session.user.email}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-400 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">Nama Lengkap</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Perbarui Profil
            </button>
          </div>
        </form>

        <button
          onClick={handleLogout}
          className="w-full mt-4 py-2 px-4 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;