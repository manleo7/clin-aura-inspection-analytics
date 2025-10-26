function drawOverviewChart(data) {
  const byRegion = d3.rollups(data, v => v.length, d => d.Region);
  const regions = byRegion.map(d => d[0]);
  const counts = byRegion.map(d => d[1]);

  Plotly.newPlot('overview', [{
    type: 'bar',
    x: regions,
    y: counts,
    marker: { color: '#009E9A' }
  }], {
    title: 'Global Inspection Distribution by Region',
    paper_bgcolor: 'white',
    plot_bgcolor: 'white'
  });
}

function drawYearlyTrends(data) {
  const byYear = d3.rollups(data, v => v.length, d => d.Year);
  const years = byYear.map(d => d[0]);
  const counts = byYear.map(d => d[1]);

  Plotly.newPlot('yearly-trends', [{
    type: 'scatter',
    mode: 'lines+markers',
    x: years,
    y: counts,
    line: { color: '#0B1E3C', width: 3 }
  }], {
    title: 'Inspection Findings Over Time (2018–2024)'
  });
}

function drawFocusAreas(data) {
  const byFocus = d3.rollups(data, v => v.length, d => d.Focus_Area);
  const focus = byFocus.map(d => d[0]);
  const counts = byFocus.map(d => d[1]);

  Plotly.newPlot('focus-areas', [{
    type: 'pie',
    labels: focus,
    values: counts,
    marker: { colors: ['#009E9A', '#F5C542', '#0B1E3C', '#00b8b3', '#004d4b'] }
  }], {
    title: 'Regulatory Focus Areas'
  });
}

function drawFutureInsights(data) {
  Plotly.newPlot('future-insights', [{
    type: 'indicator',
    mode: 'gauge+number',
    value: 87,
    title: { text: "Predicted Readiness Index (2025)", font: { size: 20 } },
    gauge: { axis: { range: [0, 100] }, bar: { color: '#009E9A' } }
  }]);
}
