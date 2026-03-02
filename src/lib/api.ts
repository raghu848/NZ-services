import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

// Interceptor for JWT
api.interceptors.request.use(config => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('admin_token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const bookingApi = {
    create: (data: any) => api.post('/bookings', data),
    getAll: (params?: any) => api.get('/bookings', { params }),
    getById: (id: number) => api.get(`/bookings/${id}`),
    getStats: () => api.get('/bookings/stats'),
    updateStatus: (id: number, status: string, adminNotes?: string) =>
        api.patch(`/bookings/${id}/status`, { status, adminNotes }),
    delete: (id: number) => api.delete(`/bookings/${id}`)
};

export const reviewApi = {
    getPublished: () => api.get('/reviews/published'),
    submit: (data: any) => api.post('/reviews', data),
    getAll: () => api.get('/reviews'),
    approve: (id: number) => api.patch(`/reviews/${id}/approve`),
    publish: (id: number) => api.patch(`/reviews/${id}/publish`),
    delete: (id: number) => api.delete(`/reviews/${id}`)
};

export const contactApi = {
    submit: (data: any) => api.post('/contact', data),
    getAll: () => api.get('/contact'),
    markAsRead: (id: number) => api.patch(`/contact/${id}/read`)
};

export const authApi = {
    login: (data: any) => api.post('/auth/login', data),
    logout: () => api.post('/auth/logout'),
    me: () => api.get('/auth/me')
};

export default api;
