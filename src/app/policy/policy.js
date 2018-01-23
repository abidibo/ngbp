angular.module( 'wc.policy', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'policy', {
    url: '/policy',
    views: {
      "main": {
        controller: 'PolicyCtrl',
        templateUrl: 'policy/policy.tpl.html'
      }
    },
    data:{ pageTitle: 'Cookie Policy' }
  });
})

.controller( 'PolicyCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
