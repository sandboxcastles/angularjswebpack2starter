module.exports = function(ngModule){
    var greeterCtrl = [function(){
        let $ctrl = this;
        $ctrl.$onInit = function(){
            $ctrl.username = $ctrl.username || 'user'
        };
    }];
    let greeterCmpt =  {
        bindings: {
            username: '@'
        },
        controller: greeterCtrl,
        template: require('./greeter.component.html')
    };
    
    ngModule.component('nilaGreeterComponent', greeterCmpt);
};