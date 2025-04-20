const BACKEND_SERVER = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_BACKEND_REMOTE
    : 'http://localhost:8000';

export default BACKEND_SERVER;