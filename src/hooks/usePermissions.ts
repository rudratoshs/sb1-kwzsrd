import { useAuth } from '@/contexts/AuthContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function usePermissions() {
  const { user } = useAuth();
  const [permissions, setPermissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPermissions = async () => {
      if (user?.role_id) {
        try {
          const response = await axios.get(`/api/roles/${user.role_id}/permissions`);
          setPermissions(response.data.permissions.map((p: any) => p.name));
        } catch (error) {
          console.error('Failed to fetch permissions:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPermissions();
  }, [user]);

  const hasPermission = (permission: string) => {
    return permissions.includes(permission);
  };

  return { permissions, hasPermission, loading };
}