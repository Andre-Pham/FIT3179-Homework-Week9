var map = "js/us_aqi_vegalite.json";
vegaEmbed('#symbol_map', map).then(function(result) { })
  .catch(console.error);