document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Map container not found!");
    return;
  }

  const map = L.map("map").setView([-26.2041, 28.0473], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([-26.2041, 28.0473])
    .addTo(map)
    .bindPopup("Ronald's Carpentry<br>Johannesburg, Gauteng")
    .openPopup();
});
