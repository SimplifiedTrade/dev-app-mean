 'use strict';
    angular.module('core').controller('calendarController', function($scope) {
      $scope.name = "blah"
    });
   angular.module('core').directive('chart', function() {
        return {
          restrict: 'A',
          link: function($scope, $elm, $attr) {
            // Create the data table.
            var data = new google.visualization.DataTable();
             data.addColumn({ type: 'string', id: 'President' });
             data.addColumn({ type: 'date', id: 'Start' });
             data.addColumn({ type: 'date', id: 'End' });
             data.addRows([
            [ 'Washington', new Date(1789, 3, 29), new Date(1797, 2, 3) ],
            [ 'Adams',      new Date(1797, 2, 3),  new Date(1801, 2, 3) ],
            [ 'Jefferson',  new Date(1801, 2, 3),  new Date(1809, 2, 3) ]]);

            
            // Set chart options
            var options = {'title':'Timeline',
                           'width':800,
                           'height':800};
            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.Timeline($elm[0]);
            chart.draw(data, options);
          }
      }
    });
//    google.setOnLoadCallback(function() {
//      angular.bootstrap(document.body, ['myapp']);
//    });
    google.load('visualization', '1', {packages: ['timeline']});

