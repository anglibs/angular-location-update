!function(angular, undefined) { 'use strict';

  angular.module('ngLocationUpdate', [])
      .run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
        $location.update_path = function (path, keep_previous_path_in_history) {
          if ($location.path() == path) return;

          var routeToKeep = $route.current;
          $rootScope.$on('$locationChangeSuccess', function () {
            if (routeToKeep) {
              $route.current = routeToKeep;
              routeToKeep = null;
            }
          });

          $location.path(path);
          if (!keep_previous_path_in_history) $location.replace();
        };
      }]);

}(window.angular);
