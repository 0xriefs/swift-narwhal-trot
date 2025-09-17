import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../integrations/supabase/client';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const Login = () => {
  const { session } = useAuth();

  if (session) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="flex justify-center items-center h-full pt-16">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white">Login or Sign Up</h2>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={['google', 'github']}
          socialLayout="horizontal"
        />
      </div>
    </div>
  );
};

export default Login;