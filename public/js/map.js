
var math = require('mathjs');

//once county is selected, select center of all datapoints
//find all latitudes. 
//push into array

//Get data from mongo
var dataArray = JSON.parse(fs.readFileSync('../../Monmouth.json', 'utf8'));
// var dataArray = [
//   {"Latitude":39.5257,"Longitude":-74.49974,"Age":51,"Gender":"F","EducationLevel":2,"HomeOwner":"Y","LanguageCode":"E","Income":"K","Diets":false,"CasinoGambler":false,"InterestedInSports":true,"CollectsSportsMemorabilia":false,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":false,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":false},
//   {"Latitude":39.52049,"Longitude":-74.50082,"Age":58,"Gender":"F","EducationLevel":1,"HomeOwner":"Y","LanguageCode":"E","Income":"K","Diets":false,"CasinoGambler":false,"InterestedInSports":true,"CollectsSportsMemorabilia":false,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":false,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":false},
//   {"Latitude":39.53417,"Longitude":-74.5106,"Age":60,"Gender":"F","EducationLevel":3,"HomeOwner":"Y","LanguageCode":"E","Income":"I","Diets":true,"CasinoGambler":false,"InterestedInSports":true,"CollectsSportsMemorabilia":true,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":true,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":true},
//   {"Latitude":39.52663,"Longitude":-74.49997,"Age":53,"Gender":"F","EducationLevel":2,"HomeOwner":"Y","LanguageCode":"E","Income":"H","Diets":false,"CasinoGambler":false,"InterestedInSports":false,"CollectsSportsMemorabilia":false,"InterestedInMovies":false,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":false,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":false},
//   {"Latitude":39.5198,"Longitude":-74.48605,"Age":61,"Gender":"F","EducationLevel":2,"HomeOwner":"Y","LanguageCode":"E","Income":"K","Diets":false,"CasinoGambler":false,"InterestedInSports":false,"CollectsSportsMemorabilia":false,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":true,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":false},
//   {"Latitude":40.72241,"Longitude":-74.987451,"Age":42,"Gender":"F","EducationLevel":3,"HomeOwner":"Y","LanguageCode":"E","Income":"L","Diets":true,"CasinoGambler":false,"InterestedInSports":true,"CollectsSportsMemorabilia":true,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":true,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":false},
//   {"Latitude":39.50202,"Longitude":-74.49667,"Age":70,"Gender":"F","EducationLevel":0,"HomeOwner":"Y","LanguageCode":"E","Income":"H","Diets":false,"CasinoGambler":false,"InterestedInSports":false,"CollectsSportsMemorabilia":false,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":false,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":false},
//  {"Latitude":39.535138,"Longitude":-74.463023,"Age":60,"Gender":"M","EducationLevel":1,"HomeOwner":"Y","LanguageCode":"E","Income":"H","Diets":true,"CasinoGambler":false,"InterestedInSports":true,"CollectsSportsMemorabilia":false,"InterestedInMovies":true,"PlaysVideoGames":false,"PlaysBoardGames":false,"InterestedInPhotography":true,"OwnsSwimmingPool":false,"Travels":true,"ContributesToAnimalCharities":true}
// ]
var dataArrayLength = dataArray.length;
var latitudesArray = [];
var longitudesArray = [];

function latCenter (arr){
  debugger
  //loop through data and push into array
  for ( var i = 0; i < arr.length; i ++){
    var currentPersonLatitude = arr[i].Latitude 
    console.log(currentPersonLatitude);
    latitudesArray.push(currentPersonLatitude);
    console.log(latitudesArray);
  }
  return math.mean(latitudesArray);
};

function longCenter (arr) {
  //find all longtitudes
  for(var j = 0; j < arr.Length; j ++) {
    var currentPersonLongitude = arr[j].Latitude 
    console.log(currentPersonLongitude)
    longitudesArray.push(currentPersonLongitude);

  }
  return math.mean(longitudesArray); 
};

var latCenter = latCenter(dataArray);
// var longCenter = longCenter(dataArray);

console.log("latCenter:", latCenter)
console.log("longCenter:", longCenter)

var circle = L.circle([latCenter, longCenter], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap);


// Initial map view
var map = L.map('map').setView([
latCenter,longCenter], 14);

//Open Streetmap
          L.tileLayer('http://otile4.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map);

var mapIcon = L.icon({
              iconUrl: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/128/Map-Marker-Marker-Inside-Azure.png',
              iconRetinaUrl: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/128/Map-Marker-Marker-Inside-Azure.png',
              iconSize: [80,80],
              iconAnchor: [],
              popupAnchor: [],
              shadowUrl: '',
              shadowRetinaUrl: '',
              shadowSize: [],
              shadowAnchor: []
          });

for  (var ){

}
L.marker([40.3506308,-74.0715948], {icon: mapIcon}).addTo(map).bindPopup('Insert Data Here').openPopup();

var NJ = {
  "type": "Feature",
  "id": "State",
  "properties": {
    "name": "New_Jersey",
  "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#050A56",
            fillOpacity: 0.8
       }
  },
};


 "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [40.3506308,-74.0715948],
        //Populate jsoncoordinates
      ]
    ]
  }
};

  var NY = {
  "type": "Feature",
  "id": "State",
  "properties": {
    "name": "New_York",
    "style": {
            weight: 2,
            color: "#999",
            opacity: 1,
            fillColor: "#050A56",
            fillOpacity: 0.8
        }
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [40.7186598,-74.0165811],
        //Populate json coordinates
      ]
    ]
  }
};




// script
window.onload = function() {


    L.geoJson([NY], {

      style: function (feature) {
        return feature.properties.geometry && feature.properties.style;
      }
    }).addTo(map);

};

module.export = circle;

