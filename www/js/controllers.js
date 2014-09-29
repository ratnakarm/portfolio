angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ClientCtrl', function($scope) {  
})
.controller('ContactCtrl', function($scope) {  
})
.controller('OurteamCtrl', function($scope) {  
})
.controller('AboutCtrl', function($scope) {  
})
.controller('PortCtrl', function($scope) {  
})
.controller('Port1Ctrl', function($scope, Logos) { 
  $scope.logos = Logos.all();
  
})
.controller('Port1logoCtrl', function($scope, $stateParams, Logos) {  
 $scope.logos = Logos.get($stateParams.logoId);

})
.controller('Port3Ctrl', function($scope, $stateParams) { 
  $scope.vcards = [
    { title: 'Frensol', id: 1 , images: [
      "img/vcard1.jpg"
    ]},
    { title: 'Dikshitha', id: 1 , images: [
      "img/vcard2.jpg"
    ]},{ title: 'VB Infra', id: 1 , images: [
      "img/vcard3.jpg"
    ]},{ title: 'Zybox', id: 1 , images: [
      "img/Vcard4.jpg"
    ]},{ title: 'Gold Fish', id: 1 , images: [
      "img/vcard5.jpg"
    ]},{ title: '470', id: 1 , images: [
      "img/vcard6.jpg"
    ]}
  ];
})
;

