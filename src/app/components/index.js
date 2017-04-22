module.exports = function(ngModule){
    require('./greeter.component')(ngModule);
    require('./pageComponent.component')(ngModule);
    require('./aboutThis.component')(ngModule);
}