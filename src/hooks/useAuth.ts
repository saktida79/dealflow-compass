import { useState, useEffect, createContext, useContext } from 'react';
import { User, UserRole, Permission } from '@/types';

// Mock current user - in real app this would come from authentication service
const mockUser: User = {
  id: 'user-1',
  name: 'Alexandra Chen',
  email: 'alexandra.chen@mapro.com',
  role: 'Senior Partner',
  avatar: '',
  department: 'Strategy',
  permissions: [
    'deals.read',
    'deals.write',
    'clients.read',
    'clients.write',
    'documents.read',
    'documents.write',
    'financials.read',
    'financials.write',
    'analytics.read'
  ]
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  hasPermission: (permission: Permission) => boolean;
  hasRole: (role: UserRole) => boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    // Return mock auth for demo purposes
    return {
      user: mockUser,
      loading: false,
      hasPermission: (permission: Permission) => mockUser.permissions.includes(permission),
      hasRole: (role: UserRole) => mockUser.role === role,
      login: async () => {},
      logout: () => {}
    };
  }
  return context;
};

export const AuthProvider = AuthContext.Provider;