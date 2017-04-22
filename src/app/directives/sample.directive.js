module.exports = function(ngModule){
    let nilaSampleDirective = [function(){
        return {
            restrict: 'EA',
            template: require('./sample.directive.html'),
            transclude: true
        };
    }];
    ngModule.directive('nilaSampleDirective', nilaSampleDirective);
};