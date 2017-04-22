module.exports = function(ngModule){
    let appBindings = {};
    let appCtrl = [function(){
        var $ctrl = this;
        $ctrl.site = {
            title: 'Anglar Webpack Site'
        }
    }];
    let appCmpt = {
        bindings: appBindings,
        controller: appCtrl,
        template: require('./app.component.html')
    };
    
    ngModule.component('nilaMainApp', appCmpt);
};