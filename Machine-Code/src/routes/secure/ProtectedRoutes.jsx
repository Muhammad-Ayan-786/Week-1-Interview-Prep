import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../features/auth/hooks/useAuth';

const ProtectedRoutes = () => {
  const { currentUser, isInitialized } = useAuth();

  if (!isInitialized) {
    return <div className="p-8 text-center text-sm text-(--color-text-secondary)">Loading account...</div>;
  }

  return currentUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;