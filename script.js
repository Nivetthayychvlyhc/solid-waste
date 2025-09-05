// Solid Waste Dashboard Script

// --- Demo Totals ---
const totals = { 
  generated: 12000, 
  recycled: 4800, 
  landfill: 7200 
};

// Insert KPI values into DOM
document.getElementById("wasteGen").textContent = totals.generated;
document.getElementById("wasteRecycle").textContent = totals.recycled;
document.getElementById("wasteLandfill").textContent = totals.landfill;

// --- Waste Composition Pie Chart ---
const compCtx = document.getElementById("compChart").getContext("2d");
new Chart(compCtx, {
  type: 'pie',
  data: {
    labels: ['Organic', 'Plastic', 'Paper', 'Metal', 'Glass', 'Other'],
    datasets: [{
      data: [40, 20, 15, 10, 8, 7],
      backgroundColor: [
        '#22c55e', // green
        '#f97316', // orange
        '#3b82f6', // blue
        '#64748b', // gray
        '#facc15', // yellow
        '#a855f7'  // purple
      ]
    }]
  }
});

// --- Recycling vs Disposal Trend Line Chart ---
const trendCtx = document.getElementById("trendChart").getContext("2d");
new Chart(trendCtx, {
  type: 'line',
  data: {
    labels: [2018, 2019, 2020, 2021, 2022, 2023],
    datasets: [
      { 
        label: 'Recycled', 
        data: [2000, 2500, 3000, 3500, 4200, 4800],
        borderColor: '#22c55e',
        backgroundColor: '#22c55e40',
        fill: true,
        tension: 0.3
      },
      { 
        label: 'Landfilled', 
        data: [8000, 8200, 8500, 9000, 9500, 7200],
        borderColor: '#ef4444',
        backgroundColor: '#ef444440',
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: { 
    responsive: true, 
    scales: { 
      y: { beginAtZero: true } 
    } 
  }
});
