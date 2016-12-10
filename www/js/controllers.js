angular.module('starter.controllers', ['ngCordova'])

.controller('HomeCtrl', function($scope, Collections, Exhibitions) {
  $scope.collections = Collections.all();
  $scope.exhibitions = Exhibitions.all();
  $scope.options = {
    loop: false,
    speed: 500,
  }
  $scope.data = {};
  $scope.$watch('data.slider', function(nv, ov) {
    $scope.slider = $scope.data.slider;
  })
})

.controller('TourCtrl', function($scope, $cordovaBarcodeScanner, Collections, $state) {
  $scope.collections = Collections.all();
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner.scan().then(function(imageData) {
      var getInfo = false;
      if (imageData.text != "") {
        for (var i = 0; i < $scope.collections.length; i++) {
          if ($scope.collections[i].id === imageData.text) {
            getInfo = true;
            break;
          }
        }
        if (getInfo === true) {
          $state.go('tab.tour-detail', {
            collectionId: imageData.text
          });
        } else {
          alert("Invalid QR Code: " + imageData.text);
        }
      }
      console.log("Barcode Format -> " + imageData.format);
      console.log("Cancelled -> " + imageData.cancelled);
    }, function(error) {
      console.log("An error happened -> " + error);
    });
  };

  $scope.track = {
    url: 'https://raw.githubusercontent.com/AndrewXeno/AndrewXeno.github.io/master/audio/AudioGuide.mp3',
    artist: 'UQ Art Museum',
    title: 'We who love: The Nolan slates Exhibition Introduction',
    art: 'img/UQAM_photo2.jpg'
  }
})

.controller('BrowseCtrl', function($scope) {})

.controller('ResultsCtrl', function($scope, Collections) {
  $scope.collections = Collections.all();
})

.controller('CollectionCtrl', function($scope, Collections) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.collections = Collections.all();
  $scope.remove = function(collection) {
    Collections.remove(collection);
  };
})

.controller('CollectionDetailCtrl', function($scope, $stateParams, Collections) {
  $scope.collection = Collections.get($stateParams.collectionId);
})

.controller('ExhibitionDetailCtrl', function($scope, $stateParams, Exhibitions) {
  $scope.exhibition = Exhibitions.get($stateParams.exhibitionId);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableTrackLocation: false,
    enableNotiExhibition: true,
    enableNotiArtwork: false,
    enableNotiEvent: true
  };
})


.controller('TourMapStaticCtrl', function($scope) {})

.controller('TourMapCtrl', function($scope, $ionicLoading) {
  $scope.initialise = function() {
    var myLatlng = new google.maps.LatLng(-27.496517, 153.0119913);
    var mapOptions = {
      center: myLatlng,
      zoom: 21,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      var myLocation = new google.maps.Marker({
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        map: map,
        title: "My Location"
      });
    });

    $scope.map = map;
  };
  google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
});