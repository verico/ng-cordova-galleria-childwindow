angular.module('com.verico.ng-cordova-galleria-childwindow', []).
    service('ngCordovaGalleriaChildwindow', function() {

        var openChildWindow = function(images){

            var ref = window.open('bower_components/ng-cordova-galleria-childwindow/galleria-childwindow.html', '_blank', 'EnableViewPortScale=yes,location=no');

            var loadstop = function() {
                ref.executeScript({ code: 'init(\'' +JSON.stringify(images) + '\');' });
            };
            var exit = function() {
                ref.removeEventListener('loadstop', loadstop);
                ref.removeEventListener('exit', exit);
            };
            ref.addEventListener('loadstop', loadstop);
            ref.addEventListener('exit', exit);


        };


        return {
            open : openChildWindow
        };
    });
