const isDevelopment = import.meta.env.DEV;

export const ASSETS_URL = isDevelopment 
  ? '' 
  : import.meta.env.VITE_AWS_ASSETS_URL.replace(/\/$/, '').trim(); 