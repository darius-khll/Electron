
var app = angular.module('app', ["ngComponentRouter"]);


app.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})

app.value('$routerRootComponent', 'app')

app.component('app', {
  template:
  `<nav>
      <a ng-link="['First']">First</a>
      <a ng-link="['Second']">Second</a>
      
    </nav>
    <ng-outlet></ng-outlet>`,
  $routeConfig: [
    { path: '/first', name: 'First', component: 'first', useAsDefault: true },
    { path: '/second', name: 'Second', component: 'second' },
    { path: '**', component: 'first' }
  ]
});


