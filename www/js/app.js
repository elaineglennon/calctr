angular.module('starter', ['ionic', 'starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.dishes', {
    url: "/dishes/:dishesId",
    views: {
      'menuContent': {
        templateUrl: "templates/dishes.html",
        controller: 'DishesCtrl'
      }
    }
  });

   $urlRouterProvider.otherwise('/app/dishes/1');
});

function incDec(plusMinus) {
      var plusMinus = parseInt(plusMinus);
      var calorieContent = 
parseInt(document.getElementById("dailyTotal").innerHTML) + plusMinus;
      //alert(calorieContent);
    
     if(calorieContent < 0)
     {
       calorieContent = 0;
     }  
     else if(calorieContent > 3000)
     {
       calorieContent = 3000;
     }
     else
     {
       document.getElementById("dailyTotal").innerHTML = calorieContent;
     }
   }
    
    function reset() {
      document.getElementById("dailyTotal").innerHTML = 00;
    } 