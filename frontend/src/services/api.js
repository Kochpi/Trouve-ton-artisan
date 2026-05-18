import axios from "axios";

const API_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "x-api-key": "RpDidali58!",
  },
});

// Récupérer tous les artisans
export const getAllArtisans = () => axios.get(`${API_URL}/artisans`);
// par son id
export const getArtisanById = (id) => axios.get(`${API_URL}/artisans/${id}`);
//artisans du mois
export const getTopArtisans = () => axios.get(`${API_URL}/artisans/top`);
// artisans par catégorie
export const getArtisansByCategory = (id) =>
  axios.get(`${API_URL}/artisans/category/${id}`);
// Récupérer les catégories
export const getAllCategories = () => axios.get(`${API_URL}/categories`);
// Rechercher un artisan par nom
export const searchArtisans = (nom) =>
  axios.get(`${API_URL}/artisans/search?nom=${nom}`);
// Envoyer un message de contact
export const sendContact = (data) => axios.post(`${API_URL}/contact`, data);
