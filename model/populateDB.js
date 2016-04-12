var fs = require('fs');
var mongoose = require('mongoose');
var db = require("./config/db.js")

var obj = JSON.parse(fs.readFileSync('Monmouth.json', 'utf8'));

var Schema = mongoose.Schema;

var personSchema = new Schema({
  Latitude: Number,
  Longitude: Number,
  Age: Number,
  Gender: String,
  EducationLevel: Number,
  HomeOwner: String,
  LanguageCode: String,
  Income: String,
  Diets: Boolean,
  CasinoGambler: Boolean,
  InterestedInSports: Boolean,
  CollectsSportsMemorabilia: Boolean,
  InterestedInMovies: Boolean,
  InterestedInVideoGames: Boolean,
  PlaysVideoGames: Boolean,
  PlaysBoardGames: Boolean,
  InterestedInPhotography: Boolean,
  OwnsSimmingPool: Boolean,
  Travels: Boolean,
  ContributesToAnimalCharities: Boolean,
});

var data = mongoose.model('data', personSchema);

personData.collection.insertMany(obj, function(err) {
  if (err) {
    throw err;
  }
  db.close();
});
