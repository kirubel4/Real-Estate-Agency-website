import React, { useEffect } from 'react';

const BrokerPerformanceChart = () => {
  useEffect(() => {
    // Load Google Charts
    const loadCharts = () => {
      const script = document.createElement('script');
      script.src = 'https://www.gstatic.com/charts/loader.js';
      script.onload = () => {
        window.google.charts.load('current', { packages: ['bar'] });
        window.google.charts.setOnLoadCallback(drawChart);
      };
      document.body.appendChild(script);
    };

    const drawChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ['Year', 'Sales (in Birr)', 'Expenses (in Birr)', 'Profit (in Birr)'],
        ['2021', 5000000, 2000000, 1000000],
        ['2022', 6000000, 2500000, 1200000],
        ['2023', 7500000, 3000000, 1500000],
        ['2024', 8500000, 3500000, 1800000],
        ['2025', 10000000, 4000000, 2200000]
      ]);

      // Check if dark mode is enabled
      const isDarkMode = window.document.documentElement.classList.contains("dark");

      // Set chart options based on dark mode
      const options = {
        chart: {
          title: 'Ayele Agency Performance average',
          subtitle: 'Sales, Expenses, and Profit: 2021-2025',
        },
        bars: 'vertical', // Keep bars vertical
        height: 300, // Chart height
        backgroundColor: 'transparent', // Transparent background
        colors: [
          isDarkMode ? '#4CAF50' : '#4CAF50', // Sales color (green)
          isDarkMode ? '#FF9800' : '#FF9800', // Expenses color (orange)
          isDarkMode ? '#2196F3' : '#2196F3'  // Profit color (blue)
        ],
        titleTextStyle: {
          color: isDarkMode ? '#FFF' : '#000' // Title color in dark mode (white) and light mode (black)
        },
        subtitleTextStyle: {
          color: isDarkMode ? '#FFF' : '#000' // Subtitle color in dark mode (white) and light mode (black)
        },
      };

      const chart = new window.google.charts.Bar(document.getElementById('columnchart_material'));
      chart.draw(data, window.google.charts.Bar.convertOptions(options));
    };

    loadCharts();
  }, []);

  return (
    <div
      id="columnchart_material"
      className="max-w-xs sm:max-w-sm md:max-w-md mx-auto dark:bg-transparent" // No centering class
      style={{ height: '300px', margin: '10px 0' }}
    ></div>
  );
};

export default BrokerPerformanceChart;
