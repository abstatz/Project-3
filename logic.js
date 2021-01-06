var locations = [
    {
        coordinates: [30.249437, -97.766893],
        bars: {
            name: "Corner Bar"},
    },
    {
        coordinates: [30.263768, -97.727788],
        bars: {
            name: "Revelry Kitchen + Bar"},
    },
    {
        coordinates: [30.317858, -97.722036],
        bars: {
            name: "Workhorse Bar"},   
    },
    {
        coordinates: [30.279892, -97.742087],
        bars: {
            name: "Dive Bar & Lounge"},
    },
    {
        coordinates: [30.241267, -97.785023],
        bars: {
            name: "Lavaca St Bar"},
    },
    {
        coordinates: [30.269952, -97.748538],
        bars: {
            name: "Star Bar"},
    },
    {
        coordinates: [30.267789, -97.746277],
        bars: {
            name: "The Roosevelt Room"},
    },
    {
        coordinates: [30.26457, -97.743832],
        bars: {
            name: "Corner Restuarant & Bar"},
    },
    {
        coordinates: [30.255018, -97.761916],
        bars: {
            name: "Gibson Street Bar"},
    },
    {
        coordinates:[30.26662, - 97.742054],
        bars: {
            name: "HandleBar"},
    },
    {
        coordinates: [30.284824, -97.717586],
        bars: {
            name: "Haymaker"},
    },
    {
        coordinates: [30.22200, -97.688515],
        bars: {
            name: "The Garden Grille Bar"},
    },
    {
        coordinates: [30.265519, -97.740274],
        bars: {
            name: "Champions Sports Bar"},
    },
    {
        coordinates: [30.264093, -97.42583],
        bars: {
            name: "Cedar Door Patio Bar & Grill"},
    },
    {
        coordinates: [30.269722, -97.74939],
        bars: {
            name: "Key Bar"},
    },
    {
        bars: {
            coordinates: [30.268651, -97.728072],
            name: "Nikel City"
        },
    },
    {
        coordinates: [30.266897, -97,739041],
        bars: {
            name: "The Library Bar"},
    },
    {
        coordinates: [30.258006, -97.738721],
        bars: {
           name: "Javelina" },
    },
    {
        coordinates: [30.298204, -97.705062],
        bars: {
            name: "B.D. Riley's Irish Pub at Mueller"},
    },
    {
        coordinates: [30.272994, -97.757171],
        bars: {
            name: "Clark's Oyster Bar"},
    },
    {
        coordinates: [30.200134, -97.786305],
        liquorStores: {
            name: "Ace Liquor Store"},
    },
    {
        coordinates: [30.247116, -97.773396],
        liquorStores: {
            name: "Chris's Liquor Store"},
    },
    {
        coordiantes: [30.238142, -97.739354],
        liquorStores: {
            name: "Travis Heights Wine & Spirits"},
    },
    {
        coordinates: [30.264868, -97.744228],
        liquorStores: {
            name: "Urban Wine + Liquor"},
    },
    {
        coordinates: [30.264868, -97.744228],
        liquorStores: {
            name: "Johnnie's Liquor Store"},
    },
    {
        coordinates: [30.241312, -97.760465],
        liquorStores: {
            name: "Warehouse Liquors"},
    },
    {
        coordinates: [30.272302, -97.698549],
        liquorStores: {
            name: "Millpond Liquor Store"},
    },
    {
        coordinates: [30.208205, -97.815198],
        liquorStores: {
            name: "Chris's Liquor"},
    },
    {
        coordinates: [30.319972, -97.694547],
        liquorStores: {
          name: "Chris Liquor"},
    },
    {
        coordinates: [30.210435, -97.652639],
        liquorStores: {
            name: "Mount Everest Liquor"},
    },
    {
        coordinates: [30.274503, -97.71995],
        liquorStores: {
            name: "C&M Liquors"},
    },
    {
       coordinates: [30.292154, -97.74295],
       liquorStores: {
           name: "Nueces Liquor"}, 
    },
    {
      coordinates: [30.257154, -97.746502],
      liquorStores: {
          name: "New World Liquor"},  
    },
    {
        coordinates: [30.276423, -97.751901],
        liquorStores: {
            name: "Wiggy's Wine Spirits"},
    },
    {
        coordinates: [30.305800, -97.715347],
        liquorStores: {
            name: "Home Town Liquor & Spirits"},
    },
    {
        coordinates: [30.305800, -97.715347],
        liquorStores: {
            name:"A&B Liquors Inc."},
    },
    {
        coordinates: [30.235508, -97.791124],
        liquorStores: {
            name: "Twin Liquors"},
    },
    {
        coordinates: [30.32628, -97.740667],
        liquorStores: {
            name: "King Liquor"},
    },
    {
        coordinates: [30.313162, -97.664003],
        liquorStores: {
            name: "Tom's Liquor"},
    },
    {
        coordinates: [30.23985, -97.727501],
        liquorStores: {
            name: "Riverside Liquor"},
    },
    {
        coordinates: [30.19484, -97.777385],
        casinos: {
            name: "Shuffle 512"},
    },
    {
        coordinates: [30.24798, -97.776142],
        casinos: {
            name: "Three Ring Service"},
    },
    {
        coordinates: [30.271908, -97.710887],
        casinos: {
            name: "Millenium Entertainment Center"},
    },
];

// Define arrays to hold created bars, liquor stores and casino markers
var barMarkers = [];
var liquorstoreMarkers = [];
var casinoMarkers = [];

// Loop through locations and create bar, liquor store, and casino markers
for (var i = 0; i < locations.length; i++) {
    //setting the bar marker
    barMarkers.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.75,
            color: "white",
            fillColor: "white",
            radius: 500
        })
    );
    // Setting the liquor store marker
    liquorstoreMarkers.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.75,
            color: "purple",
            fillColor: "purple",
            radius: 500
        })
    );
    // Setting the casino markers
    casinoMarkers.push(
        L.circle(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.75,
            color: "orange",
            fillColor: "orange",
            radius: 500
        })
    );
}

// Create base layers

// Streetmap Layervar 
streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tilesize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});

// Create three separate layer groups: one for bars, one for liquor stores, and one for casinos
var bars = L.layerGroup(barMarkers);
var liquorStores = L.layerGroup(liquorstoreMarkers);
var casinos = L.layerGroup(casinoMarkers);

// Create a baseMaps object
var baseMaps = {
    "street Map": streetmap,
    "Dark Map": darkmap
};

// Create an overlay object
var myMap = L.map("map", {
    center:[30.2672, -97.7431],
    zoom: 5,
    layers: [streetmap, bars, liquorStores, casinos]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addTo(myMap);