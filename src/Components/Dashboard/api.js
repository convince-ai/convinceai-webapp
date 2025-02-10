import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_DASHBOARD_API || "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,  
});

// Carrinhos abandonados por região
export const getAbandonedRegions = async () => {
  try {
    const response = await api.get("/abandoned-cart/bi/abandoned-regions", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
      },
    });
    
    // Convertendo para o formato correto
    const formattedData = response.data.map((item) => ({
      state: item.state, 
      ddd: item.ddd,
      abandonedCarts: item.abandonedCarts,
    }));

    return formattedData;
  } catch (error) {
    console.error("Erro ao buscar regiões de carrinhos abandonados:", error);
    return [];
  }
};

// Produtos abandonados
export const getAbandonedProducts = async () => {
  try {
    const response = await api.get("/abandoned-cart/bi/abandoned-products", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
      },
    });

    // Convertendo para o formato correto
    const formattedData = response.data.map((item) => ({
      name: item.name, 
      value: item.value
    }));

    return formattedData;
  } catch (error) {
    console.error("Erro ao buscar produtos abandonados:", error);
    return [];
  }
};

//Carrinhos abandonados 

//Carrinhos recuperados

//Taxa de conversao
