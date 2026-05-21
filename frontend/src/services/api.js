import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// SECURITE
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": "RpDidali58!",
  },
});

// FICHIER QUI LIE LE FRONTEND ET LE BACKEND

// Récupérer tous les artisans
export const getAllArtisans = () => api.get(`${API_URL}/artisans`);
// par son id
export const getArtisanById = (id) => api.get(`${API_URL}/artisans/${id}`);
//artisans du mois
export const getTopArtisans = () => api.get(`${API_URL}/artisans/top`);
// artisans par catégorie
export const getArtisansByCategory = (id) =>
  api.get(`${API_URL}/artisans/category/${id}`);
// Récupérer les catégories
export const getAllCategories = () => api.get(`${API_URL}/categories`);
// Rechercher un artisan par nom
export const searchArtisans = (nom) =>
  api.get(`${API_URL}/artisans/search?nom=${nom}`);
// Envoyer un message de contact
export const sendContact = (data) => api.post(`${API_URL}/contact`, data);
