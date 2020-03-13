let inputVal = localStorage.getItem( "user-name");
let savedVal = inputVal.toLowerCase();

const mike = [ "watch", "phone", "headphones", "bookbag" ];
const jessica = [ "purse", "phone","nintendo switch", "glasses" ];


let select = document.getElementById("items");

if( savedVal.toLowerCase() === 'jessica') {
  for (index in jessica) {
    select.options[select.options.length] = new Option(jessica[index], index);
  }
}else{
  for (index in mike) {
    select.options[select.options.length] = new Option(mike[index], index);
  }
}

//map code

/**
 * Moves the map to display over Berlin
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function moveMapToBerlin(map){
  map.setCenter({lat: 40.726446, lng: -73.871727 });
  map.setZoom(11);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
const platform = new H.service.Platform({ apikey: 'apikey' });
const defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe


const map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
    center: {lat:41, lng:-73},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
  });
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  moveMapToBerlin(map);
}

if( savedVal === 'jessica'){
  var nyMarker1 = new H.map.Marker(
    {lat: 40.723584, lng: -73.982449 }
  );
  var nyMarker2 = new H.map.Marker(
    {lat: 40.713175, lng: -73.896275 }
  );
  var nyMarker3 = new H.map.Marker(
    {lat: 40.749078, lng: -73.820057 }
  );
  var nyMarker4 = new H.map.Marker(
    {lat: 40.761821, lng: -73.963223 }
  );
  map.addObject(nyMarker1);
  map.addObject(nyMarker2);
  map.addObject(nyMarker3);
  map.addObject(nyMarker4);
  }else{
  var nyMarker1 = new H.map.Marker(
    {lat: 40.733308, lng: -73.863133 }
  );
  var nyMarker2 = new H.map.Marker(
    {lat: 40.709499, lng: -73.812311 }
  );
  var nyMarker3 = new H.map.Marker(
    {lat: 40.650950, lng: -73.722038 }
  );
  var nyMarker4 = new H.map.Marker(
    {lat: 40.738803, lng: -74.000731 }
  );

  map.addObject(nyMarker1);
  map.addObject(nyMarker2);
  map.addObject(nyMarker3);
  map.addObject(nyMarker4);
}



//const mikeStuffLocation = { "watch": {lat: 40.723584, lng: -73.982449 }, "phone": {lat: 40.713175, lng: -73.896275 }, "headphones": {lat: 40.749078, lng: -73.820057 }, "bookbag":  {lat: 40.761821, lng: -73.963223 } };
//const jessicaStuffLocation = { "purse": {lat: 40.733308, lng: -73.863133 }, "phone": {lat: 40.709499, lng: -73.812311 }, "nintendo switch": {lat: 40.650950, lng: -73.722038 }, "glasses":  {lat: 40.738803, lng: -74.000731 } };

/*
function grabItemValue( ) {
  let itemValues = $("#items").val();
  let nyMarker;

  if (savedVal === 'mike') {
    let newVal = mike[itemValues];
    nyMarker = new H.map.Marker({
      lat: 40.749078,
      lng: -73.820057
    });
    map.addObject(nyMarker);
  }else{
    nyMarker = new H.map.Marker({
      lat: 40.650950,
      lng: -73.722038
    });
    map.addObject(nyMarker);

  }
}

/*
 switch (newVal) {
      case "headphones":
        nyMarker = new H.map.Marker({
          lat: 40.749078,
          lng: -73.820057
        });
        break;
      case "phone":
        nyMarker = new H.map.Marker({
          lat: 40.713175,
          lng: -73.896275
        });
        break;
      case "watch":
        nyMarker = new H.map.Marker({
          lat: 40.723584,
          lng: -73.982449
        });
    }
  } else {
    let newVal = jessica[itemValues];
    switch (newVal) {
      case "phone":
        nyMarker = new H.map.Marker({
          lat: 40.709499,
          lng: -73.812311
        });
        map.addObject(nyMarker);
        break;
      case "nintendo switch":
        nyMarker = new H.map.Marker({
          lat: 40.650950,
          lng: -73.722038
        });
        map.addObject(nyMarker);
        break;
      case "purse":
        alert("Selected!");
        nyMarker = new H.map.Marker({
          lat: 40.733308,
          lng: -73.863133
        });
        map.addObject(nyMarker);
    }
  }
*/
