/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieWFrdWJ1YW1pZHUxIiwiYSI6ImNrbHl1dDZ2aTA2ejUycHBmdzZscHdmN2EifQ.1hIG_mlIJRcRoN6jyDG8Og';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yakubuamidu1/cklyvda7v1gxh17r1u4s47hji',
    scrollZoom: false,
    //   center: [-118.124794, 34.118771],
    //   zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p> ${loc.day} ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
