document.addEventListener("DOMContentLoaded", async () => {
  const data = await d3.csv("data/inspection_data.csv");

  // Organize data for charts
  window.inspectionData = data;
  drawOverviewChart(data);
  drawYearlyTrends(data);
  drawFocusAreas(data);
  drawFutureInsights(data);
});
