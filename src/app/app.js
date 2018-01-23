angular.module( 'wc', [
  'templates-app',
  'templates-common',
  'wc.home',
  'wc.about',
  'wc.policy',
  'wc.map',
  'ui.router',
  'anim-in-out'
])

.config( function myAppConfig ( $locationProvider, $stateProvider, $urlRouterProvider ) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Webcam #Cumiana' ;
    }
    else {
      $scope.pageTitle = 'Webcam #Cumiana' ;
    }
  });
})

;

