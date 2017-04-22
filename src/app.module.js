// app.module.js entry point for the AngularJS Application
///<reference path="angular" />

// This is the main scss file - webpack will compile this to css
const css = require('./app.module.scss');

// Main AngularJS App module
let ngModule = angular.module('MainApp', []);

// AngularJS registration files (each are '.js')
let angularRegistrations = [
    'app.component',
    'components/index',
    'directives/index',
    'services/index',
    'filters/index'
];
// Require each AngularJS registration file
for (var i = 0; i < angularRegistrations.length; i++){
    require('./' + angularRegistrations[i])(ngModule);
}