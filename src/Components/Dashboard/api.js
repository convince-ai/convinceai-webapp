import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_DASHBOARD_API || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,  
});

// Carrinhos abandonados por região
export const getAbandonedRegions = async () => {
  try {
    const response = await api.get("/abandoned-cart/bi/abandoned-regions");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar regiões de carrinhos abandonados:", error);
    return [];
  }
};

// Produtos abandonados
export const getAbandonedProducts = async () => {
  try {
    const response = await api.get("/products/bi/abandoned-products", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos abandonados:", error);
    return [];
  }
};
