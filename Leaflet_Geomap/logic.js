var locations = [
    {
        bars: {
            coordinates: [30.249437, -97.766893],
            name: "Corner Bar"
        },
    },
    {
        bars: {
            coordinates: [30.263768, -97.727788],
            name: "Revelry Kitchen + Bar"
        },
    },
    {
        bars: {
            coordinates: [30.317858, -97.722036],
            name: "Workhorse Bar"
        },   
    },
    {
        bars: {
            coordinates: [30.279892, -97.742087],
            name: "Dive Bar & Lounge"
        },
    },
    {
        bars: {
            coordinates: [30.241267, -97.785023],
            name: "Lavaca St Bar"
        },
    },
    {
        bars: {
            coordinates: [30.269952, -97.748538],
            name: "Star Bar"
        },
    },
    {
        bars: {
            coordinates: [30.267789, -97.746277],
            name: "The Roosevelt Room"
        },
    },
    {
        bars: {
            coordinates: [30.26457, -97.743832],
            name: "Corner Restuarant & Bar"
        },
    },
    {
        bars: {
            coordinates: [30.255018, -97.761916],
            name: "Gibson Street Bar"
        },
    },
    {
        bars: {
            coordinates:[30.26662, - 97.742054],
            name: "HandleBar"
        },
    },
    {
        bars: {
            coordinates: [30.284824, -97.717586],
            name: "Haymaker"
        },
    },
    {
        bars: {
            coordinates: [30.22200, -97.688515],
            name: "The Garden Grille Bar"
        },
    },
    {
        bars: {
            coordinates: [30.265519, -97.740274],
            name: "Champions Sports Bar"
        },
    },
    {
        bars: {
            coordinates: [30.264093, -97.42583],
            name: "Cedar Door Patio Bar & Grill"
        },
    },
    {
        bars: {
            coordinates: [30.269722, -97.74939],
            name: "Key Bar"
        },
    },
    {
        bars: {
            coordinates: [30.268651, -97.728072],
            name: "Nikel City"
        },
    },
    {
        bars: {
            coordinates: [30.266897, -97,739041],
            name: "The Library Bar"
        },
    },
    {
        bars: {
           coordinates: [30.258006, -97.738721],
           name: "Javelina" 
        },
    },
    {
        bars: {
            coordinates: [30.298204, -97.705062],
            name: "B.D. Riley's Irish Pub at Mueller"
        },
    },
    {
        bars: {
            coordinates: [30.272994, -97.757171],
            name: "Clark's Oyster Bar"
        },
    },
    {
        liquorStores: {
            coordinates: [30.200134, -97.786305],
            name: "Ace Liquor Store"
        },
    },
    {
        liquorStores: {
            coordinates: [30.247116, -97.773396],
            name: "Chris's Liquor Store"
        },
    },
    {
        liquorStores: {
            coordiantes: [30.238142, -97.739354],
            name: "Travis Heights Wine & Spirits"
        },
    },
    {
        liquorStores: {
            coordinates: [30.264868, -97.744228],
            name: "Urban Wine + Liquor"
        },
    },
    {
        liquorStores: {
            coordinates: [30.321123, -97.705415],
            name: "Johnnie's Liquor Store"
        },
    },
    {
        liquorStores: {
            coordinates: [30.241312, -97.760465],
            name: "Warehouse Liquors"
        },
    },
    {
        liquorStores: {
            coordinates: [30.272302, -97.698549],
            name: "Millpond Liquor Store"
        },
    },
    {
        liquorStores: {
            coordinates: [30.208205, -97.815198],
            name: "Chris's Liquor"
        },
    },
    {
        liquorStores: {
          coordinates: [30.319972, -97.694547],
          name: "Chris Liquor"  
        },
    },
    {
        liquorStores: {
            coordinates: [30.210435, -97.652639],
            name: "Mount Everest Liquor"
        },
    },
    {
        liquorStores: {
            coordinates: [30.274503, -97.71995],
            name: "C&M Liquors"
        },
    },
    {
       liquorStores: {
           coordinates: [30.292154, -97.74295],
           name: "Nueces Liquor"
       }, 
    },
    {
      liquorStores: {
          coordinates: [30.257154, -97.746502],
          name: "New World Liquor"
      },  
    },
    {
        liquorStores: {
            coordinates: [30.276423, -97.751901],
            name: "Wiggy's Wine Spirits"
        },
    },
    {
        liquorStores: {
            coordinates: [30.305800, -97.715347],
            name: "Home Town Liquor & Spirits"
        },
    },
    {
        liquorStores: {
            coordinates: [30.216563, -97.739722],
            name:"A&B Liquors Inc."
        },
    },
    {
        liquorStores: {
            coordinates: [30.235508, -97.791124],
            name: "Twin Liquors"
        },
    },
    {
        liquorStores: {
            coordinates: [30.32628, -97.740667],
            name: "King Liquor"
        },
    },
    {
        liquorStores: {
            coordinates: [30.313162, -97.664003],
            name: "Tom's Liquor"
        },
    },
    {
        liquorStores: {
            coordinates: [30.23985, -97.727501],
            name: "Riverside Liquor"
        },
    },
    {
        casinos: {
            coordinates: [30.19484, -97.777385],
            name: "Shuffle 512"
        },
    },
    {
        casinos: {
            coordinates: [30.24798, -97.776142],
            name: "Three Ring Service"
        },
    },
    {
        casinos: {
            coordinates: [30.271908, -97.710887],
            name: "Millenium Entertainment Center"
        },
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
        L.marker(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.75,
            color: "white",
            fillColor: "white",
            radius: 5
        })
    );
    // Setting the liquor store marker
    liquorstoreMarkers.push(
        L.marker(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.75,
            color: "purple",
            fillColor: "purple",
            radius: 5
        })
    );
    // Setting the casino markers
    casinoMarkers.push(
        L.marker(locations[i].coordinates, {
            stroke: false,
            fillOpacity: 0.75,
            color: "orange",
            fillColor: "orange",
            radius: 5
        })
    );
}

// Create base layers

// Streetmap Layervar 
streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
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