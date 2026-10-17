import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../features/auth/hooks/useAuth';

const PublicRoutes = () => {
  const { currentUser, isInitialized } = useAuth();

  if (!isInitialized) {
    return <div className="p-8 text-center text-sm text-(--color-text-secondary)">Loading account...</div>;
  }

  return currentUser ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoutes;