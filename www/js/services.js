angular.module('starter.services', ['ionic'])

/**
 * A simple example service that returns some data.
 */
.factory('Logos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var logos = [
    { title: 'NightClub', id: 1 , images: [
      "img/logo1.jpg"
    ]},
    { title: 'Redoaks India', id: 2 , images: [
      "img/logo2.jpg"
    ]},{ title: 'BR Clinics', id: 3 , images: [
      "img/logo3.jpg"
    ]},{ title: 'City Viewz', id: 4 , images: [
      "img/grid1.jpg"
    ]},{ title: 'Dikshitha Associates', id: 5 , images: [
      "img/grid5.jpg"
    ]},{ title: 'Zach', id: 6 , images: [
      "img/logo6.jpg"
    ]},{ title: 'My Home Coffee Shop', id: 7 , images: [
      "img/logo7.jpg"
    ]},
    { title: 'Home io', id: 8 , images: [
      "img/logo8.jpg"
    ]}, { title: 'Incredible Trainings', id: 9 , images: [
      "img/grid2.jpg"
    ]},
{ title: 'APschools', id: 10 , images: [
      "img/logo9.jpg"
    ]}
  ];

  return {
    all: function() {
      return logos;
    },
    get: function(logoId) {
      // Simple index lookup
      return logos[logoId];
    }
  }
});
