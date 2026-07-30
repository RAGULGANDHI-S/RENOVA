// RENOVA Authentication Service

export const DEMO_USERS = {
  admin: {
    id: 'USR-ADMIN-01',
    name: 'Sarah Connor',
    email: 'admin@renova.eco',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    title: 'Platform Administrator',
    badge: 'Super Admin'
  },
  hotel: {
    id: 'USR-HOTEL-01',
    name: 'Grand Eco Luxury Resort',
    email: 'sustainability@grandeco.com',
    role: 'hotel',
    avatar: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&q=80',
    title: 'Sustainability Director',
    badge: 'Gold Eco Partner'
  },
  restaurant: {
    id: 'USR-REST-01',
    name: 'Green Leaf Organic Bistro',
    email: 'kitchen@greenleafbistro.com',
    role: 'restaurant',
    avatar: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    title: 'Head Chef & Kitchen Mgr',
    badge: 'Zero-Waste Kitchen'
  },
  vendor: {
    id: 'USR-VEND-01',
    name: 'Agro Fresh Wholesale Market',
    email: 'logistics@agrofresh.com',
    role: 'vendor',
    avatar: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=200&q=80',
    title: 'Produce Supply Manager',
    badge: 'Circular Vendor'
  },
  farmer: {
    id: 'USR-FARM-01',
    name: 'David Miller Farms',
    email: 'david@millerfarms.org',
    role: 'farmer',
    avatar: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=200&q=80',
    title: 'Organic Agri Specialist',
    badge: 'Regenerative Farmer'
  },
  delivery: {
    id: 'USR-DELIV-01',
    name: 'EcoExpress Logistics Fleet',
    email: 'fleet@ecoexpress.com',
    role: 'delivery',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    title: 'Fleet Logistics Lead',
    badge: 'EV Delivery Unit'
  }
};

/**
 * Authenticate user with role
 */
export const loginUser = async (roleKey = 'admin', customEmail = '', password = '') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = DEMO_USERS[roleKey.toLowerCase()] || DEMO_USERS.admin;
      const sessionUser = {
        ...user,
        email: customEmail || user.email,
        loginTime: new Date().toISOString(),
        token: `mock_jwt_token_${roleKey}_${Date.now()}`
      };

      localStorage.setItem('renova_user', JSON.stringify(sessionUser));
      localStorage.setItem('renova_auth_token', sessionUser.token);
      resolve({ success: true, user: sessionUser });
    }, 800);
  });
};

/**
 * Logout current user
 */
export const logoutUser = () => {
  localStorage.removeItem('renova_user');
  localStorage.removeItem('renova_auth_token');
};

/**
 * Get currently authenticated user from localStorage
 */
export const getStoredUser = () => {
  try {
    const data = localStorage.getItem('renova_user');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

/**
 * Check if user is logged in
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('renova_auth_token');
};
