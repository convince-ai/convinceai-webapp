import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getAbandonedProducts, getAbandonedRegions } from "./api";
import "./dashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const geoUrl = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";
const colorScale = scaleLinear().domain([0, 150]).range(["#ffcccc", "#990000"]);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    abandonedCarts: 0,
    recoveredCarts: 0,
    conversionRate: 0,
    abandonedRegions: [],
    abandonedProducts: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [abandonedProductsData, abandonedRegionsData] = await Promise.all([
          getAbandonedProducts(),
          getAbandonedRegions(),
        ]);

        setDashboardData((prevData) => ({
          ...prevData,
          abandonedProducts: abandonedProductsData, // Dados da API de produtos abandonados
          abandonedRegions: abandonedRegionsData, // Dados da API de regiões com carrinhos abandonados
        }));

        setLoading(false);
      } catch (err) {
        setError("Erro ao carregar os dados do dashboard");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard-container">
      {/* Cards de informações */}
      <div className="cards-info">
        <div className="msg-user">
          <h3>Olá, Empresa!</h3>
          <p></p>
          <h4>{new Date().toLocaleDateString("pt-BR")} {new Date().toLocaleTimeString("pt-BR")}</h4>
        </div>
        <div className="card">
          <div className="icon carrinho-abandonado"></div>
          <div>
            <h3>Carrinhos Abandonados</h3>
            <p>{dashboardData.abandonedCarts}</p>
          </div>
        </div>
        <div className="card">
          <div className="icon carrinho-recuperado"></div>
          <div>
            <h3>Carrinhos Recuperados</h3>
            <p>{dashboardData.recoveredCarts}</p>
          </div>
        </div>
        <div className="card">
          <div className="icon taxa-de-conv"></div>
          <div>
            <h3>Taxa de conversão</h3>
            <p>{dashboardData.conversionRate}%</p>
          </div>
        </div>
      </div>

      {/* Mapa do Brasil */}
      <div className="products-info">
        <div className="product-container">
          <h2>PRODUTOS ABANDONADOS POR REGIÃO</h2>
          <div className="map-wrapper">
            <ComposableMap projection="geoMercator" projectionConfig={{ center: [-413, -15], scale: 850 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateData = dashboardData.abandonedRegions.find(
                      (d) => geo.properties.name === d.state
                    );
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={stateData ? colorScale(stateData.abandonedCarts) : "#DDD"}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#FFD700" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

        {/* Produtos mais abandonados */}
        <div className="product-container">
          <h2>PRODUTOS MAIS ABANDONADOS</h2>
          <div className="chart-wrapper">
            <Doughnut
              data={{
                labels: dashboardData.abandonedProducts.map((p) => p.name),
                datasets: [
                  {
                    data: dashboardData.abandonedProducts.map((p) => p.value),
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
                    hoverBackgroundColor: ["#FF6384AA", "#36A2EBAA", "#FFCE56AA", "#4BC0C0AA", "#9966FFAA"],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${context.label}: ${value} (${percentage}%)`;
                      },
                    },
                  },
                },
              }}
            />
          </div>
          <div className="legend-wrapper">
            {dashboardData.abandonedProducts.map((product, index) => (
              <div key={index} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"][index] }}
                ></span>
                <span className="legend-label">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
