
mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [77.209, 28.6239], // starting position [lng, lat]
  zoom:9,//starting zoom
  });
 
