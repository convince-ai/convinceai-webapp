import React from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import "./dashboard.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";


ChartJS.register(ArcElement, Tooltip, Legend);



//mapa do brasil
const geoUrl = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

// simulacao enqt n integrar com back
const data = [
  { state: "São Paulo", ddd: "11", abandonedCarts: 120 },
  { state: "Rio de Janeiro", ddd: "21", abandonedCarts: 90 },
  { state: "Minas Gerais", ddd: "31", abandonedCarts: 75 },
  { state: "Bahia", ddd: "71", abandonedCarts: 50 },
  { state: "Pará", ddd: "91", abandonedCarts: 20 },
];


const colorScale = scaleLinear()
  .domain([0, 150])
  .range(["#ffcccc", "#990000"]);

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>

      {/* Cards de informações */}
      <div className="cards-info">
        <div className="msg-user">
          <h3>Olá, Empresa!</h3>
          <p>15/12/2024 11:22</p>
        </div>
        <div className="card">
          <div className="icon carrinho-abandonado"></div>
          <div>
            <h3>Carrinhos Abandonados</h3>
            <p>150</p>
          </div>
        </div>
        <div className="card">
          <div className="icon carrinho-recuperado"></div>
          <div>
            <h3>Carrinhos Recuperados</h3>
            <p>30</p>
          </div>
        </div>
        <div className="card">
          <div className="icon taxa-de-conv"></div>
          <div>
            <h3>Taxa de conversão</h3>
            <p>24%</p>
          </div>
        </div>
      </div>

      {/* Mapa do Brasil e Itens Abandonados*/}
      <div className="products-info">
        <div className="product-container">
          <h2>Carrinhos Abandonados por Região</h2>
          <div className="map-wrapper">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                center: [-413, -15],
                scale: 850
              }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateData = data.find((d) => geo.properties.name === d.state);
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
        <div className="product-container">
  <h2>Principais Produtos Abandonados</h2>
  <div className="chart-wrapper">
    <Doughnut
      data={{
        labels: ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E"], // Nomes dos produtos
        datasets: [
          {
            data: [150, 120, 90, 80, 60], // Quantidade de abandonos
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
            ],
            hoverBackgroundColor: [
              "#FF6384AA",
              "#36A2EBAA",
              "#FFCE56AA",
              "#4BC0C0AA",
              "#9966FFAA",
            ],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "bottom", // Legenda abaixo do gráfico
          },
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
</div>

      </div>
    </div>
  );
}

export default Dashboard;
