// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1IjoienZsMTIxNSIsImEiOiJjbTE4OG1lNnQwOG5lMmpxMnRwNGZnb3drIn0.U_npUNUZEOSOXVi5-SWgHw"; //YOUR KEY HERE


// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/zvl1215/cm1dtqpo000qf01qk450z2pv4", //YOUR STYLE URL
  center: [-73.9442, 40.6482], // starting position [lng, lat] (google brooklyn)
  zoom: 11, // starting zoom (adjust it as you wish)
  projection: "globe", // display the map as a 3D globe
});

const layers = [
    'HOLC Grade D'
  ];
  const colors = [
    '#ba2921'
  ];

map.on('load', () => {
    // create legend
const legend = document.getElementById('legend');

layers.forEach((layer, i) => {
  const color = colors[i];
  const item = document.createElement('div');
  const key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  const value = document.createElement('span');
  value.innerHTML = `${layer}`;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
});

  });

